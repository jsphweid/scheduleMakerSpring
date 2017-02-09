import React from 'react';
import ReactDOM from 'react-dom';

import Warnings from './components/warnings';
import Title from './components/title';
import Table from './components/table';
import MyChart from './components/myChart';

import CalcTime from './components/helper';

export default class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            employeeArray: undefined,
            scheduleData: undefined,
            weekPredictionsArray: undefined
        };

        this.handleSetNewTitle = this.handleSetNewTitle.bind(this);
        this.handleSaveShift = this.handleSaveShift.bind(this);
        this.handleCreateShift = this.handleCreateShift.bind(this);
        this.handleDeleteShift = this.handleDeleteShift.bind(this);
        this.handleWeekPredictionChange = this.handleWeekPredictionChange.bind(this);
    }

    getEmployeeRef(empId) {
        for (let i = 0; i < this.state.employeeArray.length; i++) {
            if (this.state.employeeArray[i].id === empId) {
                return this.state.employeeArray[i];
            }
        }
    }

    postJSON(url, data, callback) {
        return $.ajax({
            headers: {
                'Content-Type': 'application/json'
            },
            'type': 'POST',
            'url': url,
            'data': JSON.stringify(data),
            'success': callback
        }).done(function() {
            console.log("POST successful");
        }).fail(function() {
            console.log("POST failed............")
        });
    }

    handleSaveShift(id, empId, startHour, startMinutes, endHour, endMinutes) {
        let data = {};
        data["id"] = id;
        data["startHour"] = startHour;
        data["startMinutes"] = startMinutes;
        data["endHour"] = endHour;
        data["endMinutes"] = endMinutes;
        this.postJSON("editExistingShift", data);

        // TODO: what's a better way to update the state here?
        let emp = this.getEmployeeRef(empId);
        for (let j = 0; j < emp.shifts.length; j++) {
            if (emp.shifts[j].id = id) {
                let shift = emp.shifts[j];
                shift.startHour = startHour;
                shift.startMinutes = startMinutes;
                shift.endHour = endHour;
                shift.endMinutes = endMinutes;
                this.setState({ employeeArray: this.state.employeeArray });
            }
        }
    }

    handleCreateShift(dayId, empId) {
        let data = {};
        data["scheduleId"] = this.state.scheduleData.id;
        data["dayId"] = dayId;
        data["empId"] = empId;
        data["belongsTo"] = this.state.scheduleData.belongsTo;
        this.postJSON("addNewShift", data, (newShift) => {
            let newShiftObj = JSON.parse(newShift);
            let emp = this.getEmployeeRef(newShiftObj.employee);
            emp.shifts.push(newShiftObj);
            this.setState({ employeeArray: this.state.employeeArray });
        });
    }

    handleWeekPredictionChange(newId) {
        let data = {};
        data["scheduleId"] = this.state.scheduleData.id;
        data["weekPredictionId"] = newId;
        this.postJSON("changeWeekPrediction", data, (newWeekPredictionJsonString) => {
            this.state.scheduleData.weekPrediction = JSON.parse(newWeekPredictionJsonString);
            this.setState({ scheduleData: this.state.scheduleData });
        });
    }

    handleDeleteShift(obj) {
        let data = {};
        data["shiftId"] = obj.id;
        data["empId"] = obj.employee;
        this.postJSON("deleteShift", data, (returnData) => {
            let newShifts = JSON.parse(returnData);
            let emp = this.getEmployeeRef(obj.employee);
            emp.shifts = newShifts;
            this.setState({ employeeArray: this.state.employeeArray });
        });
    }

    handleSetNewTitle(title) {
        let data = {};
        data["title"] = title;
        data["id"] = this.state.scheduleData.id;
        this.postJSON("setNewTitle", data);
        // for test purposes
        CalcTime.getTimeCostObj(this.state.employeeArray);
    }

    componentDidMount() {
        let component = this;
        $.get("http://localhost:8080/scheduleMaker/getSchedule/" + window.schedule_id + ".json", function(scheduleData) {
            component.setState({ "scheduleData" : scheduleData });
        });
        $.get("http://localhost:8080/scheduleMaker/getEmployees.json", function(employeeArray) {
            component.setState({ "employeeArray" : employeeArray });
        });
        $.get("http://localhost:8080/scheduleMaker/getWeekPredictions.json", function(weekPredictions) {
            component.setState({ "weekPredictionsArray" : weekPredictions})
        })
    }

    render() {
        if (this.state.employeeArray && this.state.scheduleData) {
            return (
                <div>
                    <div>
                        <Title scheduleData={this.state.scheduleData}
                               handleSetNewTitle={this.handleSetNewTitle}
                               weekPredictionsArray={this.state.weekPredictionsArray}
                               handleWeekPredictionChange={this.handleWeekPredictionChange}
                        />
                        <br/><br/>
                        <Table employeeArray={this.state.employeeArray}
                               handleSaveShift={this.handleSaveShift}
                               handleCreateShift={this.handleCreateShift}
                               handleDeleteShift={this.handleDeleteShift}
                        />
                    </div>
                    <div className="container-fluid">
                        <div className="col-md-3">
                            <Warnings />
                        </div>
                        <div className="col-md-9">
                            <MyChart scheduleData={this.state.scheduleData}
                                     employeeArray={this.state.employeeArray}
                            />
                        </div>
                    </div>
                </div>

            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"));
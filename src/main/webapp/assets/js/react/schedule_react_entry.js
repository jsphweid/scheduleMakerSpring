import React from 'react';
import ReactDOM from 'react-dom';

import Warnings from './components/warnings';
import Title from './components/title';
import Table from './components/table';

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

    testButton() {
        console.log(this.state.employeeArray);
    }

    handlePageSave() {
        $.post("saveShifts",
            {
                empArray: this.state.employeeArray
            }, function(data, status) {
                console.log("status is: " + status);
            });
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
            }
        }
    }

    handleCreateShift(dayId, empId) {
        let data = {};
        let self = this;
        data["scheduleId"] = this.state.scheduleData.id;
        data["dayId"] = dayId;
        data["empId"] = empId;
        data["belongsTo"] = this.state.scheduleData.belongsTo;
        this.postJSON("addNewShift", data, function(newShift) {
            let newShiftObj = JSON.parse(newShift);
            let emp = self.getEmployeeRef(newShiftObj.employee);
            emp.shifts.push(newShiftObj);
            self.setState({
                employeeArray: self.state.employeeArray
            });
        });
    }

    handleWeekPredictionChange(newId) {
        let data = {};
        let self = this;
        data["scheduleId"] = this.state.scheduleData.id;
        data["weekPredictionId"] = newId;
        this.postJSON("changeWeekPrediction", data, function(newWeekPredictionJsonString) {
            let obj = JSON.parse(newWeekPredictionJsonString);
            self.state.scheduleData.weekPrediction = obj;
            self.setState({
                scheduleData: self.state.scheduleData
            });
        });
    }

    handleDeleteShift(obj) {
        let data = {};
        let self = this;
        data["shiftId"] = obj.id;
        data["empId"] = obj.employee;
        this.postJSON("deleteShift", data, function(returnData) {
            let newShifts = JSON.parse(returnData);
            let emp = self.getEmployeeRef(obj.employee);
            emp.shifts = newShifts;
            self.setState({
                employeeArray: self.state.employeeArray
            });
        });
    }

    handleSetNewTitle(title) {
        let data = {};
        data["title"] = title;
        data["id"] = this.state.scheduleData.id;
        this.postJSON("setNewTitle", data);
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
                        <Table employeeArray={this.state.employeeArray}
                               handleSaveShift={this.handleSaveShift}
                               handleCreateShift={this.handleCreateShift}
                               handleDeleteShift={this.handleDeleteShift}
                        />
                    </div>
                    <div>
                        <Warnings />
                    </div>
                    <div>
                        <button className="btn btn-danger" onClick={this.testButton}>for testing purposes</button>
                        <button className="btn btn-success" onClick={this.handlePageSave}>Save All</button>
                    </div>
                    <div>
                        {/*<ChartClass scheduleData={this.state.scheduleData}*/}
                        {/*employeeArray={this.state.employeeArray}*/}
                        {/*/>*/}
                    </div>
                </div>

            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"));
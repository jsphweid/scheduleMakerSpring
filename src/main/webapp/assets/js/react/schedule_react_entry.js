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
            weekPredictionsArray: undefined,
            timeCostObj: undefined,
            simpleWeekObject: undefined
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
            context: this,
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
                this.setState({
                    employeeArray: this.state.employeeArray,
                    timeCostObj : CalcTime.getTimeCostObj(this.state.employeeArray, this.state.scheduleData.id),
                    simpleWeekObject : this.getSimpleWeekObject(this.state.scheduleData)
                });
            }
        }
    }

    getSimpleWeekObject(schData) {
        if (!schData.weekPrediction) return {};
        let ret = {};
        for (let i = 0; i < 7; i++) {
            ret[i] = [];
            for (let j = 0; j < 24; j++) {
                let num = j;
                if (j < 10) num = "0" + num;
                ret[i].push(schData.weekPrediction["day" + i]["hour" + num]);
            }
        }
        return ret;
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
            this.setState({
                employeeArray: this.state.employeeArray,
                timeCostObj : CalcTime.getTimeCostObj(this.state.employeeArray, this.state.scheduleData.id),
                simpleWeekObject : this.getSimpleWeekObject(this.state.scheduleData)
            });
        });
    }

    handleWeekPredictionChange(newId) {
        let data = {};
        data["scheduleId"] = this.state.scheduleData.id;
        data["weekPredictionId"] = newId;
        this.postJSON("changeWeekPrediction", data, (newWeekPredictionJsonString) => {
            this.state.scheduleData.weekPrediction = JSON.parse(newWeekPredictionJsonString);
            this.setState({
                scheduleData: this.state.scheduleData,
                timeCostObj : CalcTime.getTimeCostObj(this.state.employeeArray, this.state.scheduleData.id),
                simpleWeekObject : this.getSimpleWeekObject(this.state.scheduleData)
            });
        });
    }

    handleDeleteShift(obj) {
        let data = {};
        data["shiftId"] = obj.id;
        data["empId"] = obj.employee;
        this.postJSON("deleteShift", data, (updatedEmployees) => {
            // let updatedEmployees = JSON.parse(updatedEmployees);
            // let emp = this.getEmployeeRef(obj.employee);
            // emp.shifts = newShifts;
            this.setState({
                employeeArray: JSON.parse(updatedEmployees),
                timeCostObj : CalcTime.getTimeCostObj(JSON.parse(updatedEmployees), this.state.scheduleData.id),
                // simpleWeekObject : this.getSimpleWeekObject(this.state.scheduleData)
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
        $.get("http://localhost:8080/scheduleMaker/getSchedule/" + window.schedule_id + ".json", (scheduleData) => {
            component.setState({
                "scheduleData" : scheduleData,
                simpleWeekObject : this.getSimpleWeekObject(scheduleData)
            });

            $.get("http://localhost:8080/scheduleMaker/getEmployees.json", (employeeArray) => {
                component.setState({
                    "employeeArray" : employeeArray,
                    "timeCostObj" : CalcTime.getTimeCostObj(employeeArray, scheduleData.id)
                });
            });


        });
        $.get("http://localhost:8080/scheduleMaker/getWeekPredictions.json", (weekPredictions) => {
            component.setState({ "weekPredictionsArray" : weekPredictions})
        })
    }

    render() {
        if (this.state.employeeArray && this.state.scheduleData) {
            console.log("rerender!!!!!!!!");
            return (
                <div>
                    <div>
                        <Title scheduleData={this.state.scheduleData}
                               handleSetNewTitle={this.handleSetNewTitle}
                               weekPredictionsArray={this.state.weekPredictionsArray}
                               handleWeekPredictionChange={this.handleWeekPredictionChange}
                        /> <br/><br/>
                        <div className="container-fluid">
                            {/*<Warnings />*/}
                            <div className="col-md-12">
                                <MyChart scheduleData={this.state.scheduleData}
                                         employeeArray={this.state.employeeArray}
                                         timeCostObj={this.state.timeCostObj}
                                         simpleWeekObject={this.state.simpleWeekObject}
                                />
                            </div>
                        </div>
                        <br/><br/>
                        <Table employeeArray={this.state.employeeArray}
                               scheduleId={this.state.scheduleData.id}
                               handleSaveShift={this.handleSaveShift}
                               handleCreateShift={this.handleCreateShift}
                               handleDeleteShift={this.handleDeleteShift}
                        />
                    </div>
                </div>

            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"));
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
            scheduleData: undefined
        };

        this.handleSetNewTitle = this.handleSetNewTitle.bind(this);
        this.handleSaveShift = this.handleSaveShift.bind(this);
        this.handleCreateShift = this.handleCreateShift.bind(this);
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
        for (let i = 0; i < this.state.employeeArray.length; i++) {
            if (this.state.employeeArray[i].id === empId) {
                let emp = this.state.employeeArray[i];
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
        }
    }

    handleCreateShift() {
        debugger;
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
    }

    render() {
        if (this.state.employeeArray && this.state.scheduleData) {
            return (
                <div>
                    <div>
                        <Title scheduleData={this.state.scheduleData}
                               handleSetNewTitle={this.handleSetNewTitle}
                        />
                        <Table employeeArray={this.state.employeeArray}
                               handleSaveShift={this.handleSaveShift}
                               handleCreateShift={this.handleCreateShift}
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
import React from 'react';
import ReactDOM from 'react-dom';

////////////////////////////////////////////////
/////////////////// WARNINGS ///////////////////
////////////////////////////////////////////////

let Warnings = React.createClass({
    render: function() {
        return (
            <p>
                This is where the warnings will go.
            </p>
        )
    }
});

////////////////////////////////////////////////
///////////////////// SHIFT ////////////////////
////////////////////////////////////////////////

let Shift = React.createClass({

    getInitialState: function() {
        return {
            divStyle: {
                "whiteSpace": "nowrap",
                "overflow": "hidden",
                "border": "1px solid black",
                "padding": "2px",
                "margin": "2px"
            },
            deleteStyle: {
                "float": "right"
            }
        }
    },
    
    timeAsStringHelper: function(hour, minute) {
        let pm = false;
        let str = "";
        if (hour > 12) {
            str += (hour - 12).toString();
        } else if (hour === 0) {
            str += "12";
        } else {
            str += hour.toString();
        }
        if (minute > 0 && minute < 10) {
            str += ":0" + minute;
        }
        if (minute >= 10) {
            str += ":" + minute;
        }
        if (hour >= 12) {
            str += "p";
        } else {
            str += "a";
        }
        return str;
    },

    getTimeAsString: function(shift) {
        return (
            this.timeAsStringHelper(shift.startHour, shift.startMinutes) +
                " to " +
            this.timeAsStringHelper(shift.endHour, shift.endMinutes)
        )
    },

    render: function() {

        return (
            <div style={this.state.divStyle}>
                <span>{this.getTimeAsString(this.props.shift)}</span>
                <span style={this.state.deleteStyle} className="glyphicon glyphicon-remove"></span>
            </div>
        )
    }
});


////////////////////////////////////////////////
///////////////////// CELL /////////////////////
////////////////////////////////////////////////

let Cell = React.createClass({

    render: function() {
        if (this.props.relevantShifts.length === 0) {
            return (<td></td>)
        } else {
            return (
                <td>
                    {this.props.relevantShifts.map(shift =>
                        <Shift key={shift.id.toString()} shift={shift}/>
                    )}
                </td>
            )
        }
    }
});

////////////////////////////////////////////////
/////////////////////  ROW  ////////////////////
////////////////////////////////////////////////

let Row = React.createClass({
    render: function() {
        const tds = [];
        [0, 1, 2, 3, 4, 5, 6].forEach(day => {
            let relevantShifts = [];
            let shifts = this.props.thisEmployee.shifts;
            for (let i = 0; i < shifts.length; i++) {
                if (shifts[i].dayId === day) {
                    relevantShifts.push(shifts[i])
                }
            }
            tds.push(<Cell key={day.toString()} relevantShifts={relevantShifts} />)
        });

        // const days = [0, 1, 2, 3, 4, 5, 6].map(day =>
        {/*<Cell key={day.toString()} day={day} />*/}
        // );

        return (
            <tr>
                <td>{this.props.thisEmployee.firstName}</td>
                {tds}
            </tr>
        )
    }
});

////////////////////////////////////////////////
///////////////////// TABLE ////////////////////
////////////////////////////////////////////////

let Table = React.createClass({

    render: function() {
        const content = this.props.employeeArray.map((val) =>
            <tr key={val.id.toString()}>
                <td>{val.firstName + " " + val.lastName}</td>
            </tr>
        );

        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Day 1</th>
                        <th>Day 2</th>
                        <th>Day 3</th>
                        <th>Day 4</th>
                        <th>Day 5</th>
                        <th>Day 6</th>
                        <th>Day 7</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.employeeArray.map(val =>
                        <Row key={val.id.toString()} thisEmployee={val} />
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
});

////////////////////////////////////////////////
///////////////////// MAIN /////////////////////
////////////////////////////////////////////////

let Main = React.createClass({

    getInitialState: function() {
        return {
            employeeMap: undefined,
            employeeArray: undefined,
            scheduleData: undefined
        }
    },

    componentDidMount: function() {
        let component = this;
        $.get("http://localhost:8080/scheduleMaker/getSchedule/" + window.schedule_id + ".json", function(scheduleData) {
            component.setState({ "scheduleData" : scheduleData });
        });
        $.get("http://localhost:8080/scheduleMaker/getEmployees.json", function(employeeData) {
            component.setState({ "employeeArray" : employeeData });
            let employeeObject = {};
            for (let employee in employeeData) {
                employeeObject[employeeData[employee].id.toString()] = employeeData[employee];
            }
            component.setState({ "employeeMap" : employeeObject })
        });
    },

    render: function() {
        if (this.state.employeeMap && this.state.scheduleData) {
            return (
                <div>
                    <div>
                        <Table employeeMap={this.state.employeeMap}
                               scheduleData={this.state.scheduleData}
                               employeeArray={this.state.employeeArray}
                        />
                    </div>
                    <div>
                        <Warnings />
                    </div>
                </div>

            )
        } else {
            return <h1>Loading...</h1>
        }
    }
});

ReactDOM.render(<Main/>, document.getElementById("root"));
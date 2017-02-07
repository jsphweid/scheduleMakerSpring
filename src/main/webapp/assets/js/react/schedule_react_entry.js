import React from 'react';
import ReactDOM from 'react-dom';

import Warnings from './components/warnings';
import Title from './components/title';
import Table from './components/table';

export default class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            employeeMap: undefined,
            employeeArray: undefined,
            scheduleData: undefined
        };
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
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'type': 'POST',
            'url': url,
            'data': JSON.stringify(data),
            'dataType': 'json',
            'success': callback
        });
    };

    handleSetNewTitle(title) {
        let data = {};
        data["title"] = title;
        data["id"] = this.scheduleData.id;
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'type': 'POST',
            'url': "setNewTitle",
            'data': JSON.stringify(data),
            'dataType': 'json'
        })
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
                        <Table employeeArray={this.state.employeeArray} />
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
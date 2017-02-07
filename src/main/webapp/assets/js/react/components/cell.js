import React from 'react';
import Shift from './shift';

export default class Cell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            relevantShifts: this.props.relevantShifts,
            latestNegativeId: -1
        };
    }

    handleCreateClick(e) {
        e.preventDefault();
        let newObj = {};
        newObj["dayId"] = this.props.day;
        newObj["employee"] = this.props.emp.id;
        newObj["startHour"] = 0;
        newObj["startMinutes"] = 0;
        newObj["endHour"] = 0;
        newObj["endMinutes"] = 0;
        newObj["id"] = this.state.latestNegativeId;
        this.props.emp.shifts.push(newObj);
        let sumObj = this.state.relevantShifts;
        sumObj.push(newObj);
        this.setState({
            relevantShifts: sumObj,
            latestNegativeId: this.state.latestNegativeId - 1
        });
    }

    handleDeleteShift(obj) {
        let i = this.props.emp.shifts.indexOf(obj);
        let relevantShifts = this.state.relevantShifts;
        relevantShifts.splice(i, 1);
        this.setState({
            relevantShifts: relevantShifts
        });
        this.props.emp.shifts.splice(i, 1);
    }

    render() {
        return (
            <td>
                {this.props.relevantShifts.map(shift =>
                    <Shift key={shift.id.toString()}
                           shift={shift}
                           handleDeleteShift={this.handleDeleteShift}
                    />
                )}
                <a href="#" onClick={this.handleCreateClick}><span className="glyphicon glyphicon-plus"></span></a>
            </td>
        )
    }
}
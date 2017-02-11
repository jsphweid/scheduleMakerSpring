import React from 'react';
import Shift from './shift';

export default class Cell extends React.Component {

    constructor(props) {
        super(props);

        this.handleCreateShift = this.handleCreateShift.bind(this);

        this.state = {
            relevantShifts: this.props.relevantShifts,
            emptyDivAddClick: {
                "minWidth" : "20px",
                "minHeight" : "20px",
                "backgroundColor" : "#CCDFCB",
                "cursor" : "pointer",
                "margin" : "5px"
            },
            nonEmptyDivAddClick: {
                "minWidth" : "20px",
                "minHeight" : "10px",
                "backgroundColor" : "#CCDFCB",
                "cursor" : "pointer",
                "margin" : "5px"
            }
        };

        // this.handleCreateClick = this.handleCreateClick.bind(this);
    }

    handleCreateShift() {
        this.props.handleCreateShift(this.props.day, this.props.emp.id);
    }

    render() {

        if (this.props.relevantShifts.length > 0) {
            return (
                <td>
                    {this.props.relevantShifts.map(shift =>
                        <Shift key={shift.id + shift.startHour + Math.random().toString(36).substring(7) + shift.startMinutes + "shift" + shift.dayId.toString()}
                               shift={shift}
                               handleDeleteShift={this.props.handleDeleteShift}
                               handleSaveShift={this.props.handleSaveShift}
                        />
                    )}
                    <div style={this.state.nonEmptyDivAddClick} onClick={this.handleCreateShift}></div>
                </td>
            )
        } else {
            return (
                <td>
                    <div style={this.state.emptyDivAddClick} onClick={this.handleCreateShift}></div>
                </td>
            )
        }
    }
}
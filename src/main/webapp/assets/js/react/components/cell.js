import React from 'react';
import Shift from './shift';

export default class Cell extends React.Component {

    constructor(props) {
        super(props);

        this.handleCreateShift = this.handleCreateShift.bind(this);

        this.state = {
            relevantShifts: this.props.relevantShifts
        };

        // this.handleCreateClick = this.handleCreateClick.bind(this);
    }

    handleCreateShift() {
        this.props.handleCreateShift(this.props.day, this.props.emp.id);
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
                           handleSaveShift={this.props.handleSaveShift}
                    />
                )}
                <a href="#/" onClick={this.handleCreateShift}><span className="glyphicon glyphicon-plus"></span></a>
            </td>
        )
    }
}
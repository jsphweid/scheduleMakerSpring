import React from 'react';
import Cell from './cell';
import CalcTime from './helper';

export default class Row extends React.Component {

    constructor() {
        super();
        this.state = {
            overHours: {
                "fontWeight" : "bold"
            }
        };
    }

    render() {
        const tds = [];
        let self = this;
        [0, 1, 2, 3, 4, 5, 6].forEach(day => {
            let relevantShifts = [];
            let shifts = this.props.thisEmployee.shifts;
            for (let i = 0; i < shifts.length; i++) {
                if (shifts[i].dayId === day && shifts[i].schedule === this.props.scheduleId) {
                    relevantShifts.push(shifts[i])
                }
            }
            tds.push(<Cell key={day.toString() + this.props.thisEmployee.firstName + this.props.thisEmployee.lastName + "cell"}
                           day={day}
                           relevantShifts={relevantShifts}
                           emp={self.props.thisEmployee}
                           handleSaveShift={self.props.handleSaveShift}
                           handleCreateShift={self.props.handleCreateShift}
                           handleDeleteShift={self.props.handleDeleteShift}
            />)
        });

        let totalHoursWorked = CalcTime.getTotalHoursWorked(this.props.thisEmployee.shifts, this.props.scheduleId);
        let overMax = (totalHoursWorked > this.props.thisEmployee.maxHours) ? (<span style={this.state.overHours}>Over Hours</span>) : "";
        return (
            <tr>
                <td>
                    {this.props.thisEmployee.firstName + " " + this.props.thisEmployee.lastName}
                    <br/>
                    (~{totalHoursWorked}) {overMax}
                </td>
                {tds}
            </tr>
        )
    }
}
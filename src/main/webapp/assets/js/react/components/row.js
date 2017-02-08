import React from 'react';
import Cell from './cell';
import CalcTime from './helper';

export default class Row extends React.Component {

    render() {
        const tds = [];
        let self = this;
        [0, 1, 2, 3, 4, 5, 6].forEach(day => {
            let relevantShifts = [];
            let shifts = this.props.thisEmployee.shifts;
            for (let i = 0; i < shifts.length; i++) {
                if (shifts[i].dayId === day) {
                    relevantShifts.push(shifts[i])
                }
            }
            tds.push(<Cell key={day.toString() + this.props.thisEmployee.firstName}
                           day={day}
                           relevantShifts={relevantShifts}
                           emp={self.props.thisEmployee}
                           handleSaveShift={self.props.handleSaveShift}
                           handleCreateShift={self.props.handleCreateShift}
                           handleDeleteShift={self.props.handleDeleteShift}
            />)
        });

        return (
            <tr>
                <td>
                    {this.props.thisEmployee.firstName + " " + this.props.thisEmployee.lastName}
                    <br/>
                    (~{CalcTime.getTotalHoursWorked(this.props.thisEmployee.shifts)})
                </td>
                {tds}
            </tr>
        )
    }
}
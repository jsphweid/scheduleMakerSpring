import React from 'react';
import Cell from './cell';

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
            tds.push(<Cell key={day.toString()}
                           day={day}
                           relevantShifts={relevantShifts}
                           emp={self.props.thisEmployee}
                           handleSaveShift={self.props.handleSaveShift}
                           handleCreateShift={self.props.handleCreateShift}
            />)
        });

        return (
            <tr>
                <td>{this.props.thisEmployee.firstName}</td>
                {tds}
            </tr>
        )
    }
}
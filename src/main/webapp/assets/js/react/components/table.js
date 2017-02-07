import React from 'react';
import Row from './row';

export default class Table extends React.Component {

    render() {
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
                        <Row key={val.id.toString()}
                             day={this.props.day}
                             thisEmployee={val}
                             handleSaveShift={this.props.handleSaveShift}
                             handleCreateShift={this.props.handleCreateShift}
                             handleDeleteShift={this.props.handleDeleteShift}
                        />
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}
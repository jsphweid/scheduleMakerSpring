import React from 'react';

export default class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.handleSaveForm = this.handleSaveForm.bind(this);
        this.handleStartHourChange = this.handleStartHourChange.bind(this);
        this.handleStartMinutesChange = this.handleStartMinutesChange.bind(this);
        this.handleEndHourChange = this.handleEndHourChange.bind(this);
        this.handleEndMinutesChange = this.handleEndMinutesChange.bind(this);

        this.state = {
            editStyles: {
                "width": "40px",
                "marginLeft": "5px",
                "marginRight": "5px"
            },
            shiftId: this.props.shift.id,
            employeeId: this.props.shift.employee,
            startHour: this.props.shift.startHour,
            startMinutes: this.props.shift.startMinutes,
            endHour: this.props.shift.endHour,
            endMinutes: this.props.shift.endMinutes
        };
    }

    handleStartHourChange(e) {
        this.setState({ startHour: e.target.value });
    }
    handleStartMinutesChange(e) {
        this.setState({ startMinutes: e.target.value });
    }
    handleEndHourChange(e) {
        this.setState({ endHour: e.target.value });
    }
    handleEndMinutesChange(e) {
        this.setState({ endMinutes: e.target.value });
    }

    handleSaveForm(react, event) {
        event.preventDefault();
        this.props.handleSave(
            this.state.shiftId,
            this.state.employeeId,
            this.state.startHour,
            this.state.startMinutes,
            this.state.endHour,
            this.state.endMinutes
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSaveForm}>
                    <input onChange={this.handleStartHourChange} style={this.state.editStyles} defaultValue={this.state.startHour} type="number" min="0" max="23"/>:
                    <input onChange={this.handleStartMinutesChange} style={this.state.editStyles} defaultValue={this.state.startMinutes} type="number" min="0" max="59"/> to
                    <input onChange={this.handleEndHourChange} style={this.state.editStyles} defaultValue={this.state.endHour} type="number" min="0" max="23"/>:
                    <input onChange={this.handleEndMinutesChange} style={this.state.editStyles} defaultValue={this.state.endMinutes} type="number" min="0" max="59"/>
                    <input type="submit" className="btn btn-default" value="Save" />
                </form>
            </div>
        )
    }
}
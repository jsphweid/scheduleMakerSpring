import React from 'react';

export default class Edit extends React.Component {

    getInitialState() {
        return {
            editStyles: {
                "width": "40px",
                "marginLeft": "5px",
                "marginRight": "5px"
            }
        }
    }

    render() {
        let shift = this.props.shift;
        return (
            <div>
                <form onSubmit={this.props.handleSave}>
                    <input id="id_startHour" style={this.state.editStyles} defaultValue={shift.startHour} type="number" min="0" max="23"/>:
                    <input id="id_startMinutes" style={this.state.editStyles} defaultValue={shift.startMinutes} type="number" min="0" max="59"/> to
                    <input id="id_endHour" style={this.state.editStyles} defaultValue={shift.endHour} type="number" min="0" max="23"/>:
                    <input id="id_endMinutes" style={this.state.editStyles} defaultValue={shift.endMinutes} type="number" min="0" max="59"/>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}
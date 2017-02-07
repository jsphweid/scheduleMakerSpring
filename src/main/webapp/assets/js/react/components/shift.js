import React from 'react';

export default class Shift extends React.Component {

    constructor() {

        super();

        this.state = {
            divStyle: {
                "whiteSpace": "nowrap",
                "overflow": "hidden",
                "border": "1px solid black",
                "padding": "2px",
                "margin": "2px"
            },
            deleteStyle: {
                "float": "right"
            },
            isEditing: false
        };
    }

    timeAsStringHelper(hour, minute) {
        let str = "";
        if (hour > 12) {
            str += (hour - 12).toString();
        } else if (hour === 0) {
            str += "12";
        } else {
            str += hour.toString();
        }
        if (minute > 0 && minute < 10) {
            str += ":0" + minute;
        }
        if (minute >= 10) {
            str += ":" + minute;
        }
        if (hour >= 12) {
            str += "p";
        } else {
            str += "a";
        }
        return str;
    }

    handleSave(e) {
        e.preventDefault();

        this.setState({
            isEditing: false
        });

        this.props.shift.startHour = parseInt($("#id_startHour").val());
        this.props.shift.startMinutes = parseInt($("#id_startMinutes").val());
        this.props.shift.endHour = parseInt($("#id_endHour").val());
        this.props.shift.endMinutes = parseInt($("#id_endMinutes").val());
    }

    getTimeAsString(shift) {
        return (
            this.timeAsStringHelper(shift.startHour, shift.startMinutes) +
            " to " +
            this.timeAsStringHelper(shift.endHour, shift.endMinutes)
        )
    }

    flipEdit() {
        this.setState({
            isEditing: true
        });
    }

    renderItemOrEditField() {
        if (!this.state.isEditing) {
            return (
                <div style={this.state.divStyle}>
                    <span onClick={this.flipEdit}>{this.getTimeAsString(this.props.shift)}</span>
                    <a href="#" onClick={() => this.props.handleDeleteShift(this.props.shift)}>
                        <span style={this.state.deleteStyle} className="glyphicon glyphicon-remove"></span>
                    </a>
                </div>
            )
        } else {
            return (
                <div>
                    <Edit shift={this.props.shift} handleSave={this.handleSave}/>
                </div>
            )
        }
    }


    render() {
        return (
            this.renderItemOrEditField()
        )
    }
}
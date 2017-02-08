import React from 'react';
import Edit from './edit';

export default class Shift extends React.Component {

    constructor() {

        super();

        this.handleSave = this.handleSave.bind(this);
        this.flipEdit = this.flipEdit.bind(this);
        this.render = this.render.bind(this);
        this.renderItemOrEditField = this.renderItemOrEditField.bind(this);

        this.state = {
            divStyle: {
                "whiteSpace": "nowrap",
                "overflow": "hidden",
                "border": "1px solid black",
                "padding": "2px",
                "margin": "5px"
            },
            deleteStyle: {
                "float": "right",
                "color" : "#414141"
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

    handleSave(a, b, c, d, e, f) {
        this.setState({
            isEditing: false
        });

        this.props.handleSaveShift(a, b, c, d, e, f);
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
                    <a href="#/" onClick={() => this.props.handleDeleteShift(this.props.shift)}>
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
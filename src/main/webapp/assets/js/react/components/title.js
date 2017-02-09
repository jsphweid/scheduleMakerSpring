import React from 'react';

export default class Title extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleWeekPredictionChange = this.handleWeekPredictionChange.bind(this);

        this.state = {
            weekPredictionId: this.props.scheduleData.weekPrediction.id,
            inputStyle: {
                "fontSize": "20pt",
                "fontWeight": "bold",
                "color": "#414141"
            },
            usesStyle: {
                "fontSize": "20pt",
                "fontWeight": "bold",
                "marginLeft": "20px",
                "marginRight": "20px"
            },
            divStyle: {
                "textAlign": "center",
            },
            selectStyle: {
                "fontSize": "20pt",
                "fontWeight": "bold",
                "color": "#414141",
                "width": "200px"
            },
            tableStyle: {
                "margin": "0 auto"
            }
        };
    }

    handleOnBlur() {
        let titleVal = $("#title").val();
        if (titleVal === this.props.scheduleData.title) return false;
        this.props.handleSetNewTitle(titleVal);
    }

    handleWeekPredictionChange(e) {
        this.setState({ weekPredictionId: e.target.value });
        this.props.handleWeekPredictionChange(e.target.value);
    }

    render() {

        let options = [];

        if (this.props.weekPredictionsArray) {
            this.props.weekPredictionsArray.forEach(weekPrediction => {
                options.push(
                    <option key={weekPrediction.id.toString() + weekPrediction.title}
                            value={weekPrediction.id}
                    >{weekPrediction.title}</option>
                )
            });
        }

        return (
            <div style={this.state.divStyle}>
                <table style={this.state.tableStyle}>
                    <tbody>
                    <tr>
                        <td>
                            <input id="title"
                                   type="text"
                                   defaultValue={this.props.scheduleData.title}
                                   onBlur={this.handleOnBlur}
                                   style={this.state.inputStyle}
                            />
                        </td>
                        <td>
                        <span style={this.state.usesStyle}>
                            uses week
                        </span>
                        </td>
                        <td>
                            <select className="form-control"
                                    defaultValue={this.state.weekPredictionId}
                                    value={this.state.value}
                                    onChange={this.handleWeekPredictionChange}
                                    style={this.state.selectStyle}
                            >
                                {options}
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
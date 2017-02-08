import React from 'react';

export default class Title extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleWeekPredictionChange = this.handleWeekPredictionChange.bind(this);

        this.state = {
            weekPredictionId: this.props.scheduleData.weekPrediction.id
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
            <div>
                <input id="title"
                       type="text"
                       defaultValue={this.props.scheduleData.title}
                       onBlur={this.handleOnBlur}/>
                uses

                <select defaultValue={this.state.weekPredictionId}
                        value={this.state.value}
                        onChange={this.handleWeekPredictionChange}>
                    {options}
                </select>

            </div>
        )
    }
}
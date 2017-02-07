import React from 'react';

export default class Title extends React.Component {

    constructor() {
        super();
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnBlur() {
        let titleVal = $("#title").val();
        if (titleVal === this.props.scheduleData.title) return false;
        this.props.handleSetNewTitle(titleVal);
    }

    render() {
        return (
            <div>
                <input id="title"
                       type="text"
                       defaultValue={this.props.scheduleData.title}
                       onBlur={this.handleOnBlur}/>
                uses
                <span> {this.props.scheduleData.weekPrediction.title}</span>
            </div>
        )
    }
}
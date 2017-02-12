import React from 'react';
import {Bar} from 'react-chartjs-2';

// #414141
// #CCDFCB
// #FF6A5C -- lighter = #F7A59E
// #056571

export default class MyChart extends React.Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            currentDay: 0,
            buttonGroup: {
                "textAlign": "center",
                "margin": "0 auto"
            },
        };
    }

    handleClick(e) {
        $("#radio" + this.state.currentDay).removeClass("active");
        this.setState({
            currentDay: parseInt(e.target.value)
        });
        $("#radio" + e.target.value).addClass("active");
    }

    render() {
        let costScoreObj = this.props.timeCostObj[this.state.currentDay];
        let weekPredictedArray = this.props.simpleWeekObject[this.state.currentDay];
        if ($.isEmptyObject(costScoreObj)) return (<h2>Add a shift to see the graph!</h2>);
        initialData.datasets[0].data = costScoreObj.cost;
        initialData.datasets[1].data = costScoreObj.score;
        initialData.datasets[2].data = weekPredictedArray;

        return (
            <div className="container-fluid">
                <div className="row" style={this.state.buttonGroup}>
                    <div className="btn-group" data-toggle="buttons" onClick={this.handleClick}>
                        <button id="radio0" className="btn btn-default active" value={0}>Day 1</button>
                        <button id="radio1" className="btn btn-default" value={1}>Day 2</button>
                        <button id="radio2" className="btn btn-default" value={2}>Day 3</button>
                        <button id="radio3" className="btn btn-default" value={3}>Day 4</button>
                        <button id="radio4" className="btn btn-default" value={4}>Day 5</button>
                        <button id="radio5" className="btn btn-default" value={5}>Day 6</button>
                        <button id="radio6" className="btn btn-default" value={6}>Day 7</button>
                    </div>
                </div>
                <div className="row">
                    <Bar
                        data = {initialData}
                        options = {options}
                    />
                </div>
            </div>
        );
    }
}


const initialData = {
    labels: ['4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM', '1 AM', '2 AM', '3 AM'],
    datasets: [
        {
            label: 'Cost',
            type:'line',
            data: [
                200, 210, 421, 329, 195, 492,
                200, 210, 421, 329, 195, 492,
                200, 210, 421, 329, 195, 492,
                200, 210, 421, 329, 195, 492],
            fill: false,
            borderColor: '#414141',
            backgroundColor: '#414141',
            pointBorderColor: '#414141',
            pointBackgroundColor: '#414141',
            pointHoverBackgroundColor: '#414141',
            pointHoverBorderColor: '#414141',
            yAxisID: 'y-axis-2'
        },
        {
            label: 'Scheduled',
            type:'line',
            data: [
                51, 65, 40, 49, 60, 37,
                40, 51, 65, 40, 49, 60,
                37, 40, 51, 65, 40, 49,
                60, 37, 40, 50, 51, 20],
            fill: true,
            borderColor: '#FF6A5C',
            backgroundColor: 'rgba(247, 165, 158, .4)',
            pointBorderColor: '#FF6A5C',
            pointBackgroundColor: '#FF6A5C',
            pointHoverBackgroundColor: '#FF6A5C',
            pointHoverBorderColor: '#FF6A5C',
            // yAxisID: 'y-axis-2'
        },
        {
            type: 'bar',
            label: 'Predicted',
            data: [
                52, 60, 50, 69, 50, 57,
                50, 61, 85, 30, 39, 40,
                57, 60, 71, 65, 50, 49,
                30, 47, 50, 52, 60, 23],
            fill: false,
            categoryPercentage: 1,
            backgroundColor: '#CCDFCB',
            borderColor: '#CCDFCB',
            hoverBackgroundColor: '#CCDFCB',
            hoverBorderColor: '#CCDFCB',
            yAxisID: 'y-axis-1'
        }]
};

const options = {
    responsive: true,
    tooltips: {
        mode: 'label'
    },
    elements: {
        line: {
            fill: false
        }
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            }
        ],
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left', // 400
                id: 'y-axis-1',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                },
                ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 400
                }
            },
            {
                type: 'linear',
                display: true,
                position: 'right', //200
                id: 'y-axis-2',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                },
                ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 200
                }
            }
        ]
    }
};
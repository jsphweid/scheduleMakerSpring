import React from 'react';
import {Bar} from 'react-chartjs-2';

// #414141
// #CCDFCB
// #FF6A5C -- lighter = #F7A59E
// #056571


const data = {
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
                position: 'left',
                id: 'y-axis-1',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                }
            }
        ]
    }
};

export default class MyChart extends React.Component {

    render() {
        return (
            <div>
                <h2>Day what?</h2>
                <Bar
                    data={data}
                    options={options}
                />
            </div>
        );
    }
}
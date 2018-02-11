'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #414141
// #CCDFCB
// #FF6A5C -- lighter = #F7A59E
// #056571

var MyChart = function (_React$Component) {
    _inherits(MyChart, _React$Component);

    function MyChart() {
        _classCallCheck(this, MyChart);

        var _this = _possibleConstructorReturn(this, (MyChart.__proto__ || Object.getPrototypeOf(MyChart)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);

        _this.state = {
            currentDay: 0,
            buttonGroup: {
                "textAlign": "center",
                "margin": "0 auto"
            }
        };
        return _this;
    }

    _createClass(MyChart, [{
        key: 'handleClick',
        value: function handleClick(e) {
            $("#radio" + this.state.currentDay).removeClass("active");
            this.setState({
                currentDay: parseInt(e.target.value)
            });
            $("#radio" + e.target.value).addClass("active");
        }
    }, {
        key: 'render',
        value: function render() {
            var costScoreObj = this.props.timeCostObj[this.state.currentDay];
            var weekPredictedArray = this.props.simpleWeekObject[this.state.currentDay];
            if ($.isEmptyObject(costScoreObj)) return _react2.default.createElement(
                'h2',
                null,
                'Add a shift to see the graph!'
            );
            initialData.datasets[0].data = costScoreObj.cost;
            initialData.datasets[1].data = costScoreObj.score;
            initialData.datasets[2].data = weekPredictedArray;

            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row', style: this.state.buttonGroup },
                    _react2.default.createElement(
                        'div',
                        { className: 'btn-group', 'data-toggle': 'buttons', onClick: this.handleClick },
                        _react2.default.createElement(
                            'button',
                            { id: 'radio0', className: 'btn btn-default active', value: 0 },
                            'Day 1'
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'radio1', className: 'btn btn-default', value: 1 },
                            'Day 2'
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'radio2', className: 'btn btn-default', value: 2 },
                            'Day 3'
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'radio3', className: 'btn btn-default', value: 3 },
                            'Day 4'
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'radio4', className: 'btn btn-default', value: 4 },
                            'Day 5'
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'radio5', className: 'btn btn-default', value: 5 },
                            'Day 6'
                        ),
                        _react2.default.createElement(
                            'button',
                            { id: 'radio6', className: 'btn btn-default', value: 6 },
                            'Day 7'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(_reactChartjs.Bar, {
                        data: initialData,
                        options: options
                    })
                )
            );
        }
    }]);

    return MyChart;
}(_react2.default.Component);

exports.default = MyChart;


var initialData = {
    labels: ['4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM', '1 AM', '2 AM', '3 AM'],
    datasets: [{
        label: 'Cost',
        type: 'line',
        data: [200, 210, 421, 329, 195, 492, 200, 210, 421, 329, 195, 492, 200, 210, 421, 329, 195, 492, 200, 210, 421, 329, 195, 492],
        fill: false,
        borderColor: '#414141',
        backgroundColor: '#414141',
        pointBorderColor: '#414141',
        pointBackgroundColor: '#414141',
        pointHoverBackgroundColor: '#414141',
        pointHoverBorderColor: '#414141',
        yAxisID: 'y-axis-2'
    }, {
        label: 'Scheduled',
        type: 'line',
        data: [51, 65, 40, 49, 60, 37, 40, 51, 65, 40, 49, 60, 37, 40, 51, 65, 40, 49, 60, 37, 40, 50, 51, 20],
        fill: true,
        borderColor: '#FF6A5C',
        backgroundColor: 'rgba(247, 165, 158, .4)',
        pointBorderColor: '#FF6A5C',
        pointBackgroundColor: '#FF6A5C',
        pointHoverBackgroundColor: '#FF6A5C',
        pointHoverBorderColor: '#FF6A5C'
    }, {
        type: 'bar',
        label: 'Predicted',
        data: [52, 60, 50, 69, 50, 57, 50, 61, 85, 30, 39, 40, 57, 60, 71, 65, 50, 49, 30, 47, 50, 52, 60, 23],
        fill: false,
        categoryPercentage: 1,
        backgroundColor: '#CCDFCB',
        borderColor: '#CCDFCB',
        hoverBackgroundColor: '#CCDFCB',
        hoverBorderColor: '#CCDFCB',
        yAxisID: 'y-axis-1'
    }]
};

var options = {
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
        xAxes: [{
            display: true,
            gridLines: {
                display: false
            },
            labels: {
                show: true
            }
        }],
        yAxes: [{
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
                beginAtZero: true,
                min: 0,
                max: 400
            }
        }, {
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
                beginAtZero: true,
                min: 0,
                max: 200
            }
        }]
    }
};
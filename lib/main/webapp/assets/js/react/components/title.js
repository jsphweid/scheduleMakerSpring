"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_React$Component) {
    _inherits(Title, _React$Component);

    function Title(props) {
        _classCallCheck(this, Title);

        var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));

        _this.handleOnBlur = _this.handleOnBlur.bind(_this);
        _this.handleWeekPredictionChange = _this.handleWeekPredictionChange.bind(_this);

        var wp = _this.props.scheduleData.weekPrediction;
        var weekPredictionId = wp ? wp.id : "choose";

        _this.state = {
            weekPredictionId: weekPredictionId,
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
                "textAlign": "center"
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

        return _this;
    }

    _createClass(Title, [{
        key: "handleOnBlur",
        value: function handleOnBlur() {
            var titleVal = $("#title").val();
            if (titleVal === this.props.scheduleData.title) return false;
            this.props.handleSetNewTitle(titleVal);
        }
    }, {
        key: "handleWeekPredictionChange",
        value: function handleWeekPredictionChange(e) {
            this.setState({ weekPredictionId: e.target.value });
            this.props.handleWeekPredictionChange(e.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            var options = [];

            if (this.props.weekPredictionsArray) {
                this.props.weekPredictionsArray.forEach(function (weekPrediction) {
                    options.push(_react2.default.createElement(
                        "option",
                        { key: weekPrediction.id.toString() + weekPrediction.title,
                            value: weekPrediction.id
                        },
                        weekPrediction.title
                    ));
                });
            }

            return _react2.default.createElement(
                "div",
                { style: this.state.divStyle },
                _react2.default.createElement(
                    "table",
                    { style: this.state.tableStyle },
                    _react2.default.createElement(
                        "tbody",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement("input", { id: "title",
                                    type: "text",
                                    defaultValue: this.props.scheduleData.title,
                                    onBlur: this.handleOnBlur,
                                    style: this.state.inputStyle
                                })
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement(
                                    "span",
                                    { style: this.state.usesStyle },
                                    "uses week"
                                )
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement(
                                    "select",
                                    { className: "form-control",
                                        defaultValue: this.state.weekPredictionId,
                                        value: this.state.value,
                                        onChange: this.handleWeekPredictionChange,
                                        style: this.state.selectStyle
                                    },
                                    _react2.default.createElement(
                                        "option",
                                        { value: "choose", disabled: true },
                                        "Choose"
                                    ),
                                    options
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Title;
}(_react2.default.Component);

exports.default = Title;
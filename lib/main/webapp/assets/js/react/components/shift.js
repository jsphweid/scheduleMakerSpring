'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _edit = require('./edit');

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shift = function (_React$Component) {
    _inherits(Shift, _React$Component);

    function Shift() {
        _classCallCheck(this, Shift);

        var _this = _possibleConstructorReturn(this, (Shift.__proto__ || Object.getPrototypeOf(Shift)).call(this));

        _this.handleSave = _this.handleSave.bind(_this);
        _this.flipEdit = _this.flipEdit.bind(_this);
        _this.render = _this.render.bind(_this);
        _this.renderItemOrEditField = _this.renderItemOrEditField.bind(_this);

        _this.state = {
            divStyle: {
                "whiteSpace": "nowrap",
                "overflow": "hidden",
                "border": "1px solid black",
                "padding": "2px",
                "margin": "5px"
            },
            deleteStyle: {
                "float": "right",
                "color": "#414141"
            },
            isEditing: false
        };
        return _this;
    }

    _createClass(Shift, [{
        key: 'timeAsStringHelper',
        value: function timeAsStringHelper(hour, minute) {
            var str = "";
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
    }, {
        key: 'handleSave',
        value: function handleSave(a, b, c, d, e, f) {
            this.setState({
                isEditing: false
            });
            this.props.handleSaveShift(a, b, c, d, e, f);
        }
    }, {
        key: 'getTimeAsString',
        value: function getTimeAsString(shift) {
            return this.timeAsStringHelper(shift.startHour, shift.startMinutes) + " to " + this.timeAsStringHelper(shift.endHour, shift.endMinutes);
        }
    }, {
        key: 'flipEdit',
        value: function flipEdit() {
            this.setState({
                isEditing: true
            });
        }
    }, {
        key: 'renderItemOrEditField',
        value: function renderItemOrEditField() {
            var _this2 = this;

            if (!this.state.isEditing) {
                return _react2.default.createElement(
                    'div',
                    { style: this.state.divStyle },
                    _react2.default.createElement(
                        'span',
                        { onClick: this.flipEdit },
                        this.getTimeAsString(this.props.shift)
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#/', onClick: function onClick() {
                                return _this2.props.handleDeleteShift(_this2.props.shift);
                            } },
                        _react2.default.createElement('span', { style: this.state.deleteStyle, className: 'glyphicon glyphicon-remove' })
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_edit2.default, { shift: this.props.shift, handleSave: this.handleSave })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderItemOrEditField();
        }
    }]);

    return Shift;
}(_react2.default.Component);

exports.default = Shift;
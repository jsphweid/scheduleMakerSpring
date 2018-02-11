'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
    _inherits(Row, _React$Component);

    function Row() {
        _classCallCheck(this, Row);

        var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this));

        _this.state = {
            overHours: {
                "fontWeight": "bold"
            }
        };
        return _this;
    }

    _createClass(Row, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var tds = [];
            var self = this;
            [0, 1, 2, 3, 4, 5, 6].forEach(function (day) {
                var relevantShifts = [];
                var shifts = _this2.props.thisEmployee.shifts;
                for (var i = 0; i < shifts.length; i++) {
                    if (shifts[i].dayId === day && shifts[i].schedule === _this2.props.scheduleId) {
                        relevantShifts.push(shifts[i]);
                    }
                }
                tds.push(_react2.default.createElement(_cell2.default, { key: day.toString() + _this2.props.thisEmployee.firstName + _this2.props.thisEmployee.lastName + "cell",
                    day: day,
                    relevantShifts: relevantShifts,
                    emp: self.props.thisEmployee,
                    handleSaveShift: self.props.handleSaveShift,
                    handleCreateShift: self.props.handleCreateShift,
                    handleDeleteShift: self.props.handleDeleteShift
                }));
            });

            var totalHoursWorked = _helper2.default.getTotalHoursWorked(this.props.thisEmployee.shifts, this.props.scheduleId);
            var overMax = totalHoursWorked > this.props.thisEmployee.maxHours ? _react2.default.createElement(
                'span',
                { style: this.state.overHours },
                'Over Hours'
            ) : "";
            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    this.props.thisEmployee.firstName + " " + this.props.thisEmployee.lastName,
                    _react2.default.createElement('br', null),
                    '(~',
                    totalHoursWorked,
                    ') ',
                    overMax
                ),
                tds
            );
        }
    }]);

    return Row;
}(_react2.default.Component);

exports.default = Row;
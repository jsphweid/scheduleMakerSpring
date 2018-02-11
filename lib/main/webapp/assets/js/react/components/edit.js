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

var Edit = function (_React$Component) {
    _inherits(Edit, _React$Component);

    function Edit(props) {
        _classCallCheck(this, Edit);

        var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

        _this.handleSaveForm = _this.handleSaveForm.bind(_this);
        _this.handleStartHourChange = _this.handleStartHourChange.bind(_this);
        _this.handleStartMinutesChange = _this.handleStartMinutesChange.bind(_this);
        _this.handleEndHourChange = _this.handleEndHourChange.bind(_this);
        _this.handleEndMinutesChange = _this.handleEndMinutesChange.bind(_this);

        _this.state = {
            editStyles: {
                "width": "40px",
                "marginLeft": "5px",
                "marginRight": "5px"
            },
            shiftId: _this.props.shift.id,
            employeeId: _this.props.shift.employee,
            startHour: _this.props.shift.startHour,
            startMinutes: _this.props.shift.startMinutes,
            endHour: _this.props.shift.endHour,
            endMinutes: _this.props.shift.endMinutes
        };
        return _this;
    }

    _createClass(Edit, [{
        key: "handleStartHourChange",
        value: function handleStartHourChange(e) {
            this.setState({ startHour: e.target.value });
        }
    }, {
        key: "handleStartMinutesChange",
        value: function handleStartMinutesChange(e) {
            this.setState({ startMinutes: e.target.value });
        }
    }, {
        key: "handleEndHourChange",
        value: function handleEndHourChange(e) {
            this.setState({ endHour: e.target.value });
        }
    }, {
        key: "handleEndMinutesChange",
        value: function handleEndMinutesChange(e) {
            this.setState({ endMinutes: e.target.value });
        }
    }, {
        key: "handleSaveForm",
        value: function handleSaveForm(react, event) {
            event.preventDefault();
            this.props.handleSave(parseInt(this.state.shiftId), parseInt(this.state.employeeId), parseInt(this.state.startHour), parseInt(this.state.startMinutes), parseInt(this.state.endHour), parseInt(this.state.endMinutes));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "form",
                    { onSubmit: this.handleSaveForm },
                    _react2.default.createElement("input", { onChange: this.handleStartHourChange, style: this.state.editStyles, defaultValue: this.state.startHour, type: "number", min: "0", max: "23" }),
                    ":",
                    _react2.default.createElement("input", { onChange: this.handleStartMinutesChange, style: this.state.editStyles, defaultValue: this.state.startMinutes, type: "number", min: "0", max: "59" }),
                    " to",
                    _react2.default.createElement("input", { onChange: this.handleEndHourChange, style: this.state.editStyles, defaultValue: this.state.endHour, type: "number", min: "0", max: "23" }),
                    ":",
                    _react2.default.createElement("input", { onChange: this.handleEndMinutesChange, style: this.state.editStyles, defaultValue: this.state.endMinutes, type: "number", min: "0", max: "59" }),
                    _react2.default.createElement("input", { type: "submit", className: "btn btn-default", value: "Save" })
                )
            );
        }
    }]);

    return Edit;
}(_react2.default.Component);

exports.default = Edit;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warnings = require('./components/warnings');

var _warnings2 = _interopRequireDefault(_warnings);

var _title = require('./components/title');

var _title2 = _interopRequireDefault(_title);

var _table = require('./components/table');

var _table2 = _interopRequireDefault(_table);

var _myChart = require('./components/myChart');

var _myChart2 = _interopRequireDefault(_myChart);

var _helper = require('./components/helper');

var _helper2 = _interopRequireDefault(_helper);

var _CostScore = require('./components/CostScore');

var _CostScore2 = _interopRequireDefault(_CostScore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

        _this.state = {
            employeeArray: undefined,
            scheduleData: undefined,
            weekPredictionsArray: undefined,
            timeCostObj: undefined,
            simpleWeekObject: undefined
        };

        _this.handleSetNewTitle = _this.handleSetNewTitle.bind(_this);
        _this.handleSaveShift = _this.handleSaveShift.bind(_this);
        _this.handleCreateShift = _this.handleCreateShift.bind(_this);
        _this.handleDeleteShift = _this.handleDeleteShift.bind(_this);
        _this.handleWeekPredictionChange = _this.handleWeekPredictionChange.bind(_this);
        return _this;
    }

    _createClass(Main, [{
        key: 'getEmployeeRef',
        value: function getEmployeeRef(empId) {
            for (var i = 0; i < this.state.employeeArray.length; i++) {
                if (this.state.employeeArray[i].id === empId) {
                    return this.state.employeeArray[i];
                }
            }
        }
    }, {
        key: 'postJSON',
        value: function postJSON(url, data, callback) {
            return $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                context: this,
                'type': 'POST',
                'url': url,
                'data': JSON.stringify(data),
                'success': callback
            }).done(function () {
                console.log("POST successful");
            }).fail(function () {
                console.log("POST failed............");
            });
        }
    }, {
        key: 'handleSaveShift',
        value: function handleSaveShift(id, empId, startHour, startMinutes, endHour, endMinutes) {
            var data = {};
            data["id"] = id;
            data["startHour"] = startHour;
            data["startMinutes"] = startMinutes;
            data["endHour"] = endHour;
            data["endMinutes"] = endMinutes;
            this.postJSON("editExistingShift", data);

            // TODO: what's a better way to update the state here?
            var emp = this.getEmployeeRef(empId);
            for (var j = 0; j < emp.shifts.length; j++) {
                if (emp.shifts[j].id = id) {
                    var shift = emp.shifts[j];
                    shift.startHour = startHour;
                    shift.startMinutes = startMinutes;
                    shift.endHour = endHour;
                    shift.endMinutes = endMinutes;
                    this.setState({
                        employeeArray: this.state.employeeArray,
                        timeCostObj: new _CostScore2.default(this.state.employeeArray, this.state.scheduleData.id).getObj(),
                        simpleWeekObject: this.getSimpleWeekObject(this.state.scheduleData)
                    });
                }
            }
        }
    }, {
        key: 'getSimpleWeekObject',
        value: function getSimpleWeekObject(schData) {
            if (!schData.weekPrediction) return {};
            var ret = {};
            for (var i = 0; i < 7; i++) {
                ret[i] = [];
                for (var j = 0; j < 24; j++) {
                    var num = j;
                    if (j < 10) num = "0" + num;
                    ret[i].push(schData.weekPrediction["day" + i]["hour" + num]);
                }
            }
            return ret;
        }
    }, {
        key: 'handleCreateShift',
        value: function handleCreateShift(dayId, empId) {
            var _this2 = this;

            var data = {};
            data["scheduleId"] = this.state.scheduleData.id;
            data["dayId"] = dayId;
            data["empId"] = empId;
            data["belongsTo"] = this.state.scheduleData.belongsTo;
            this.postJSON("addNewShift", data, function (newShift) {
                var newShiftObj = JSON.parse(newShift);
                var emp = _this2.getEmployeeRef(newShiftObj.employee);
                emp.shifts.push(newShiftObj);
                _this2.setState({
                    employeeArray: _this2.state.employeeArray,
                    timeCostObj: new _CostScore2.default(_this2.state.employeeArray, _this2.state.scheduleData.id).getObj(),
                    simpleWeekObject: _this2.getSimpleWeekObject(_this2.state.scheduleData)
                });
            });
        }
    }, {
        key: 'handleWeekPredictionChange',
        value: function handleWeekPredictionChange(newId) {
            var _this3 = this;

            var data = {};
            data["scheduleId"] = this.state.scheduleData.id;
            data["weekPredictionId"] = newId;
            this.postJSON("changeWeekPrediction", data, function (newWeekPredictionJsonString) {
                _this3.state.scheduleData.weekPrediction = JSON.parse(newWeekPredictionJsonString);
                _this3.setState({
                    scheduleData: _this3.state.scheduleData,
                    timeCostObj: new _CostScore2.default(_this3.state.employeeArray, _this3.state.scheduleData.id).getObj(),
                    simpleWeekObject: _this3.getSimpleWeekObject(_this3.state.scheduleData)
                });
            });
        }
    }, {
        key: 'handleDeleteShift',
        value: function handleDeleteShift(obj) {
            var _this4 = this;

            var data = {};
            data["shiftId"] = obj.id;
            data["empId"] = obj.employee;
            this.postJSON("deleteShift", data, function (updatedEmployees) {
                // let updatedEmployees = JSON.parse(updatedEmployees);
                // let emp = this.getEmployeeRef(obj.employee);
                // emp.shifts = newShifts;
                _this4.setState({
                    employeeArray: JSON.parse(updatedEmployees),
                    timeCostObj: new _CostScore2.default(_this4.state.employeeArray, _this4.state.scheduleData.id).getObj()
                });
            });
        }
    }, {
        key: 'handleSetNewTitle',
        value: function handleSetNewTitle(title) {
            var data = {};
            data["title"] = title;
            data["id"] = this.state.scheduleData.id;
            this.postJSON("setNewTitle", data);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this5 = this;

            var component = this;
            // TODO: Why do I have to hard-code it in there?
            $.get("/scheduleMaker/getSchedule/" + window.schedule_id + ".json", function (scheduleData) {
                component.setState({
                    "scheduleData": scheduleData,
                    simpleWeekObject: _this5.getSimpleWeekObject(scheduleData)
                });

                $.get("/scheduleMaker/getEmployees.json", function (employeeArray) {
                    component.setState({
                        "employeeArray": employeeArray,
                        "timeCostObj": new _CostScore2.default(employeeArray, scheduleData.id).getObj()

                    });
                });
            });
            $.get("/scheduleMaker/getWeekPredictions.json", function (weekPredictions) {
                component.setState({ "weekPredictionsArray": weekPredictions });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.employeeArray && this.state.scheduleData) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_title2.default, { scheduleData: this.state.scheduleData,
                            handleSetNewTitle: this.handleSetNewTitle,
                            weekPredictionsArray: this.state.weekPredictionsArray,
                            handleWeekPredictionChange: this.handleWeekPredictionChange
                        }),
                        ' ',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'div',
                            { className: 'container-fluid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-12' },
                                _react2.default.createElement(_myChart2.default, { scheduleData: this.state.scheduleData,
                                    employeeArray: this.state.employeeArray,
                                    timeCostObj: this.state.timeCostObj,
                                    simpleWeekObject: this.state.simpleWeekObject
                                })
                            )
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_table2.default, { employeeArray: this.state.employeeArray,
                            scheduleId: this.state.scheduleData.id,
                            handleSaveShift: this.handleSaveShift,
                            handleCreateShift: this.handleCreateShift,
                            handleDeleteShift: this.handleDeleteShift
                        })
                    )
                );
            } else {
                return _react2.default.createElement(
                    'h1',
                    null,
                    'Loading...'
                );
            }
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;


_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById("root"));
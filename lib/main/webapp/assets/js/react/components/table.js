'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var content = this.props.employeeArray.map(function (val) {
                return _react2.default.createElement(
                    'tr',
                    { key: val.belongsTo + val.id.toString() },
                    _react2.default.createElement(
                        'td',
                        null,
                        val.firstName + " " + val.lastName
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'table-responsive' },
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Employee Name'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Day 1'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Day 2'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Day 3'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Day 4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Day 5'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Day 6'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Day 7'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.props.employeeArray.map(function (val) {
                            return _react2.default.createElement(_row2.default, { key: val.id.toString() + val.firstName + val.lastName + "row",
                                day: _this2.props.day,
                                thisEmployee: val,
                                scheduleId: _this2.props.scheduleId,
                                handleSaveShift: _this2.props.handleSaveShift,
                                handleCreateShift: _this2.props.handleCreateShift,
                                handleDeleteShift: _this2.props.handleDeleteShift
                            });
                        })
                    )
                )
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

exports.default = Table;
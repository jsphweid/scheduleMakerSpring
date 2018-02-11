'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shift = require('./shift');

var _shift2 = _interopRequireDefault(_shift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
    _inherits(Cell, _React$Component);

    function Cell(props) {
        _classCallCheck(this, Cell);

        var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

        _this.handleCreateShift = _this.handleCreateShift.bind(_this);

        _this.state = {
            relevantShifts: _this.props.relevantShifts,
            emptyDivAddClick: {
                "minWidth": "20px",
                "minHeight": "20px",
                "backgroundColor": "#CCDFCB",
                "cursor": "pointer",
                "margin": "5px"
            },
            nonEmptyDivAddClick: {
                "minWidth": "20px",
                "minHeight": "10px",
                "backgroundColor": "#CCDFCB",
                "cursor": "pointer",
                "margin": "5px"
            }
        };

        // this.handleCreateClick = this.handleCreateClick.bind(this);
        return _this;
    }

    _createClass(Cell, [{
        key: 'handleCreateShift',
        value: function handleCreateShift() {
            this.props.handleCreateShift(this.props.day, this.props.emp.id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.relevantShifts.length > 0) {
                return _react2.default.createElement(
                    'td',
                    null,
                    this.props.relevantShifts.map(function (shift) {
                        return _react2.default.createElement(_shift2.default, { key: shift.id + shift.startHour + Math.random().toString(36).substring(7) + shift.startMinutes + "shift" + shift.dayId.toString(),
                            shift: shift,
                            handleDeleteShift: _this2.props.handleDeleteShift,
                            handleSaveShift: _this2.props.handleSaveShift
                        });
                    }),
                    _react2.default.createElement('div', { style: this.state.nonEmptyDivAddClick, onClick: this.handleCreateShift })
                );
            } else {
                return _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement('div', { style: this.state.emptyDivAddClick, onClick: this.handleCreateShift })
                );
            }
        }
    }]);

    return Cell;
}(_react2.default.Component);

exports.default = Cell;
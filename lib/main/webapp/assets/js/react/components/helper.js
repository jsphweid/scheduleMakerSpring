"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalcTime = function () {
    function CalcTime() {
        _classCallCheck(this, CalcTime);
    }

    _createClass(CalcTime, null, [{
        key: "getShiftDuration",
        value: function getShiftDuration(shift) {
            var hourDif = shift.endHour - shift.startHour;
            if (hourDif < 0) hourDif += 24;
            var minuteDif = shift.endMinutes - shift.startMinutes;
            if (minuteDif < 0) {
                minuteDif += 60;
                hourDif -= 1;
            }
            return hourDif + minuteDif / 60;
        }
    }, {
        key: "getTotalHoursWorked",
        value: function getTotalHoursWorked(shifts, id) {
            var sum = 0;
            for (var i = 0; i < shifts.length; i++) {
                if (shifts[i].schedule !== id) continue;
                sum += this.getShiftDuration(shifts[i]);
            }
            return Math.round(sum);
        }
    }]);

    return CalcTime;
}();

exports.default = CalcTime;
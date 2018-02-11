"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DAY_START_HOUR = exports.DAY_START_HOUR = 4;
var HOURS_IN_DAY = exports.HOURS_IN_DAY = 24;

var CostScore = function () {
    function CostScore(employees, scheduleId) {
        _classCallCheck(this, CostScore);

        this.employees = employees;
        this.scheduleId = scheduleId;
        this.costArrayOfArrays = this.initializeObjWith7EmptyArrays();
        this.scoreArrayOfArrays = this.initializeObjWith7EmptyArrays();
        this.costScoreObj = {};
    }

    _createClass(CostScore, [{
        key: "getObj",
        value: function getObj() {
            var allShiftsOnSchedule = this.getAllShiftsOnSchedule();
            if (allShiftsOnSchedule.length === 0) return {};
            this.aggregateAllShiftsToCostAndScoreArrays(allShiftsOnSchedule);
            this.aggregateCostAndScoreArraysToCostScoreObj();
            return this.costScoreObj;
        }
    }, {
        key: "aggregateCostAndScoreArraysToCostScoreObj",
        value: function aggregateCostAndScoreArraysToCostScoreObj() {
            for (var i = 0; i < 7; i++) {
                this.costScoreObj[i] = {
                    cost: this.combineArrays(this.costArrayOfArrays[i]),
                    score: this.combineArrays(this.scoreArrayOfArrays[i])
                };
            }
        }
    }, {
        key: "getAllShiftsOnSchedule",
        value: function getAllShiftsOnSchedule() {
            var allShiftsOnSchedule = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.employees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var employee = _step.value;

                    var thisEmpsShiftObjects = this.getShiftObjectsBelongingTo(employee, this.scheduleId);
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = thisEmpsShiftObjects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var shift = _step2.value;

                            allShiftsOnSchedule.push(shift);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return allShiftsOnSchedule;
        }
    }, {
        key: "aggregateAllShiftsToCostAndScoreArrays",
        value: function aggregateAllShiftsToCostAndScoreArrays(allShiftsOnSchedule) {
            var bigArrLen = allShiftsOnSchedule.length;
            for (var i = 0; i < bigArrLen; i++) {
                this.costArrayOfArrays[allShiftsOnSchedule[i].day].push(allShiftsOnSchedule[i].costArr);
                this.scoreArrayOfArrays[allShiftsOnSchedule[i].day].push(allShiftsOnSchedule[i].scoreArr);
            }
        }
    }, {
        key: "initializeObjWith7EmptyArrays",
        value: function initializeObjWith7EmptyArrays() {
            var ret = {};
            for (var i = 0; i < 7; i++) {
                ret[i] = [];
            }
            return ret;
        }
    }, {
        key: "combineArrays",
        value: function combineArrays(arrayOfArrays) {
            if (arrayOfArrays.length === 0) return new Array(HOURS_IN_DAY).fill(0);
            var aggregateArray = [];
            for (var hour = 0; hour < HOURS_IN_DAY; hour++) {
                var sum = this.sumOfAllArraysAtHour(arrayOfArrays, hour);
                aggregateArray.push(sum);
            }
            return aggregateArray;
        }
    }, {
        key: "sumOfAllArraysAtHour",
        value: function sumOfAllArraysAtHour(arrayOfArrays, index) {
            var sum = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = arrayOfArrays[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var array = _step3.value;

                    sum += array[index];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return sum;
        }
    }, {
        key: "getShiftObjectsBelongingTo",
        value: function getShiftObjectsBelongingTo(employee, scheduleId) {
            var allShiftsBelongingToThisEmp = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = employee.shifts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var shift = _step4.value;

                    if (shift.schedule !== scheduleId) continue;

                    var shiftObject = this.createShiftObject(shift, employee);
                    allShiftsBelongingToThisEmp.push(shiftObject);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return allShiftsBelongingToThisEmp;
        }
    }, {
        key: "createShiftObject",
        value: function createShiftObject(shift, employee) {
            var shiftObj = {};
            shiftObj["day"] = shift.dayId;
            var scoreArray = this.makeScoreArray(shift, employee.score);
            shiftObj["scoreArr"] = scoreArray;
            shiftObj["costArr"] = this.makeCostArray(scoreArray, employee.hourlyWage);
            return shiftObj;
        }
    }, {
        key: "makeCostArray",
        value: function makeCostArray(scoreArray, costPerHour) {
            var ret = [];
            var len = scoreArray.length;
            for (var i = 0; i < len; i++) {
                if (scoreArray[i] === 0) {
                    ret.push(0);
                } else {
                    ret.push(costPerHour);
                }
            }
            return ret;
        }
    }, {
        key: "makeScoreArray",
        value: function makeScoreArray(shift, score) {
            // TODO: This mess should probably be a whole other class for readability
            var arr = new Array(HOURS_IN_DAY).fill(0);
            var includeLastHour = shift.endMinutes > 0;
            var startInt = shift.startHour;
            var endInt = shift.endHour;

            if (shift.startMinutes > 0) startInt++;
            if (startInt === 24) {
                // start shift after 11:00pm
                startInt = 0; // hr 24 is 0
            }

            if (startInt < DAY_START_HOUR) startInt += 24;
            if (endInt < DAY_START_HOUR) endInt += 24;
            // case if either no hour or just 1 hour
            if (startInt === endInt) {
                if (!includeLastHour) {
                    return arr;
                } else {
                    arr[startInt - DAY_START_HOUR] = score;
                    return arr;
                }
            } else {
                // if normal low to high
                if (startInt < endInt) {
                    var diff = endInt - startInt;
                    diff += includeLastHour ? 1 : 0;
                    for (var i = 0; i < diff; i++) {
                        arr[startInt - DAY_START_HOUR] = score;
                        startInt++;
                    }
                    return arr;
                } else {
                    // have to reset
                    var _diff = endInt + 24 - startInt;
                    _diff += includeLastHour ? 1 : 0;
                    for (var _i = 0; _i < _diff; _i++) {
                        if (startInt >= 24 + DAY_START_HOUR) startInt = 0;
                        arr[startInt - DAY_START_HOUR] = score;
                        startInt++;
                    }
                    return arr;
                }
            }
        }
    }]);

    return CostScore;
}();

exports.default = CostScore;
'use strict';

var _chai = require('chai');

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

var _CostScore = require('./CostScore');

var _CostScore2 = _interopRequireDefault(_CostScore);

var _testData = require('./testData');

var sample = _interopRequireWildcard(_testData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Everything Test', function () {
    it('should pass', function () {
        var expectedProduct = sample.expectedTimeCostObj;
        var calculatedProducted = new _CostScore2.default(sample.employees, sample.schedule.id).getObj();
        for (var i = 0; i < 7; i++) {
            _chai.assert.deepEqual(expectedProduct[i.toString()].score, calculatedProducted[i.toString()].score);
            _chai.assert.deepEqual(expectedProduct[i.toString()].cost, calculatedProducted[i.toString()].cost);
        }
    });
});
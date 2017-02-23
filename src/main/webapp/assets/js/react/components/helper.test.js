import {expect, assert} from 'chai';
import CalcTime from './helper';
import CostScore from './CostScore';
import * as sample from './testData';

describe('Everything Test', () => {
    it('should pass', () => {
        let expectedProduct = sample.expectedTimeCostObj;
        let calculatedProducted = new CostScore(sample.employees, sample.schedule.id).getObj();
        for (let i = 0; i < 7; i++) {
            assert.deepEqual(expectedProduct[i.toString()].score, calculatedProducted[i.toString()].score);
            assert.deepEqual(expectedProduct[i.toString()].cost, calculatedProducted[i.toString()].cost);
        }
    });
});


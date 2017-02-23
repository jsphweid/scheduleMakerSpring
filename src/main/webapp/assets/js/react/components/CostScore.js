export const DAY_START_HOUR = 4;
export const HOURS_IN_DAY = 24;

export default class CostScore {

    constructor(employees, scheduleId) {
        this.employees = employees;
        this.scheduleId = scheduleId;
        this.costArrayOfArrays = this.initializeObjWith7EmptyArrays();
        this.scoreArrayOfArrays = this.initializeObjWith7EmptyArrays();
        this.costScoreObj = {};
    }

    getObj() {
        let allShiftsOnSchedule = this.getAllShiftsOnSchedule();
        if (allShiftsOnSchedule.length === 0) return {};
        this.aggregateAllShiftsToCostAndScoreArrays(allShiftsOnSchedule);
        this.aggregateCostAndScoreArraysToCostScoreObj();
        return this.costScoreObj;
    }

    aggregateCostAndScoreArraysToCostScoreObj() {
        for (let i = 0; i < 7; i++) {
            this.costScoreObj[i] = {
                cost: this.combineArrays(this.costArrayOfArrays[i]),
                score: this.combineArrays(this.scoreArrayOfArrays[i])
            };
        }
    }

    getAllShiftsOnSchedule() {
        let allShiftsOnSchedule = [];
        for (let employee of this.employees) {
            let thisEmpsShiftObjects = this.getShiftObjectsBelongingTo(employee, this.scheduleId);
            for (let shift of thisEmpsShiftObjects) {
                allShiftsOnSchedule.push(shift);
            }
        }
        return allShiftsOnSchedule;
    }

    aggregateAllShiftsToCostAndScoreArrays(allShiftsOnSchedule) {
        let bigArrLen = allShiftsOnSchedule.length;
        for (let i = 0; i < bigArrLen; i++) {
            this.costArrayOfArrays[allShiftsOnSchedule[i].day].push(allShiftsOnSchedule[i].costArr);
            this.scoreArrayOfArrays[allShiftsOnSchedule[i].day].push(allShiftsOnSchedule[i].scoreArr);
        }
    }

    initializeObjWith7EmptyArrays() {
        let ret = {};
        for (let i = 0; i < 7; i++) {
            ret[i] = [];
        }
        return ret;
    }

    combineArrays(arrayOfArrays) {
        if (arrayOfArrays.length === 0) return new Array(HOURS_IN_DAY).fill(0);
        let aggregateArray = [];
        for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
            let sum = this.sumOfAllArraysAtHour(arrayOfArrays, hour);
            aggregateArray.push(sum);
        }
        return aggregateArray;
    }

    sumOfAllArraysAtHour(arrayOfArrays, index) {
        let sum = 0;
        for (let array of arrayOfArrays) {
            sum += array[index];
        }
        return sum;
    }

    getShiftObjectsBelongingTo(employee, scheduleId) {
        let allShiftsBelongingToThisEmp = [];
        for (let shift of employee.shifts) {
            if (shift.schedule !== scheduleId) continue;

            let shiftObject = this.createShiftObject(shift, employee);
            allShiftsBelongingToThisEmp.push(shiftObject);
        }
        return allShiftsBelongingToThisEmp;
    }

    createShiftObject(shift, employee) {
        let shiftObj = {};
        shiftObj["day"] = shift.dayId;
        let scoreArray = this.makeScoreArray(shift, employee.score);
        shiftObj["scoreArr"] = scoreArray;
        shiftObj["costArr"] = this.makeCostArray(scoreArray, employee.hourlyWage);
        return shiftObj;
    }

    makeCostArray(scoreArray, costPerHour) {
        let ret = [];
        let len = scoreArray.length;
        for (let i = 0; i < len; i++) {
            if (scoreArray[i] === 0) {
                ret.push(0);
            } else {
                ret.push(costPerHour);
            }
        }
        return ret;
    }

    makeScoreArray(shift, score) {
        // TODO: This mess should probably be a whole other class for readability
        let arr = new Array(HOURS_IN_DAY).fill(0);
        let includeLastHour = shift.endMinutes > 0;
        let startInt = shift.startHour;
        let endInt = shift.endHour;

        if (shift.startMinutes > 0) startInt++;
        if (startInt === 24) { // start shift after 11:00pm
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
                let diff = endInt - startInt;
                diff += includeLastHour ? 1 : 0;
                for (let i = 0; i < diff; i++) {
                    arr[startInt - DAY_START_HOUR] = score;
                    startInt++;
                }
                return arr;
            } else { // have to reset
                let diff = (endInt + 24) - startInt;
                diff += includeLastHour ? 1 : 0;
                for (let i = 0; i < diff; i++) {
                    if (startInt >= (24 + DAY_START_HOUR)) startInt = 0;
                    arr[startInt - DAY_START_HOUR] = score;
                    startInt++;
                }
                return arr;
            }
        }
    }
}
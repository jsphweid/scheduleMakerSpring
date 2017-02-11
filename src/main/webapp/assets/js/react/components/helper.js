export default class CalcTime {

    static getShiftDuration(shift) {
        let hourDif = shift.endHour - shift.startHour;
        if (hourDif < 0) hourDif += 24;
        let minuteDif = shift.endMinutes - shift.startMinutes;
        if (minuteDif < 0) {
            minuteDif += 60;
            hourDif -= 1;
        }
        return hourDif + (minuteDif / 60);
    }

    static getTotalHoursWorked(shifts, id) {
        let sum = 0;
        for (let i = 0; i < shifts.length; i++) {
            if (shifts[i].schedule !== id) continue;
            sum += this.getShiftDuration(shifts[i]);
        }
        return Math.round(sum);
    }

    static getTimeCostObj(employees, schId) {
        let arrOfAllDataObjects = [];
        // send emps
        // for each, get back array of day data objects
        for (let i = 0; i < employees.length; i++) {
            let empArr = this.getTimeCostShiftObjEmp(employees[i], schId);
            for (let j = 0; j < empArr.length; j++) {
                arrOfAllDataObjects.push(empArr[j]);
            }
        }
        if (arrOfAllDataObjects.length === 0) return {};
        // iterate through big array

        // separate each object and make 2 objects
        // cost and score, keys are days 1-7
        // values are arrays of arrays

        let cost = {};
        let score = {};
        for (let i = 0; i < 7; i++) {
            cost[i] = [];
            score[i] = [];
        }


        let bigArrLen = arrOfAllDataObjects.length;
        for (let i = 0; i < bigArrLen; i++) {
            cost[arrOfAllDataObjects[i].day].push(arrOfAllDataObjects[i].costArr);
            score[arrOfAllDataObjects[i].day].push(arrOfAllDataObjects[i].scoreArr);
        }

        let finalObj = {};
        // make one big object combining arrays
        // day0stats is key, value is an object
        // that object has two keys cost and score
        // the keys are one single array
        for (let i = 0; i < 7; i++) {
            finalObj[i] = {
                cost: this.combineArrays(cost[i]),
                score: this.combineArrays(score[i])
            };
        }
        return finalObj;
    }

    static combineArrays(arrOfArrs) {
        if (arrOfArrs.length === 0) return new Array(24).fill(0);
        let ret = [];
        let len = arrOfArrs.length;
        let lenOfOneArr = arrOfArrs[0].length;
        for (let i = 0; i < lenOfOneArr; i++) {
            let sum = 0;
            for (let j = 0; j < len; j++) {
                sum += arrOfArrs[j][i];
            }
            ret.push(sum);
        }
        return ret;
    }

    static getTimeCostShiftObjEmp(employee, schId) {
        let ret = [];
        // retrieve score and cost for each hour
        for (let i = 0; i < employee.shifts.length; i++) {
            if (employee.shifts[i].schedule !== schId) continue;
            let shiftObj = {};
            shiftObj["day"] = employee.shifts[i].dayId;
            let scoreArray = this.makeScoreArray(employee.shifts[i], employee.score);
            shiftObj["scoreArr"] = scoreArray;
            shiftObj["costArr"] = this.makeCostArray(scoreArray, employee.hourlyWage);
            ret.push(shiftObj);
        }
        return ret;
    }

    static makeCostArray(scoreArray, costPerHour) {
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

    static makeScoreArray(shift, score) {
        let arr = new Array(24).fill(0);
        let includeLastHour = shift.endMinutes > 0;
        let startInt = shift.startHour;
        let endInt = shift.endHour;
        if (shift.startMinutes > 0) startInt++;
        if (startInt === 24) { // start shift after 11:00pm
            startInt = 0; // because hr 24 is 0
            console.log("this should almost never happen")
        }
        if (startInt < 4) startInt += 24;
        if (endInt < 4) endInt += 24;
        // case if either no hour or just 1 hour
        if (startInt === endInt) {
            if (!includeLastHour) {
                return arr;
            } else {
                arr[startInt - 4] = score;
                return arr;
            }
        } else {
            // if normal low to high
            if (startInt < endInt) {
                let diff = endInt - startInt;
                diff += includeLastHour ? 1 : 0;
                for (let i = 0; i < diff; i++) {
                    arr[startInt - 4] = score;
                    startInt++;
                }
                return arr;
            } else { // have to reset
                let diff = (endInt + 24) - startInt;
                diff += includeLastHour ? 1 : 0;
                for (let i = 0; i < diff; i++) {
                    if (startInt >= (24 + 4)) startInt = 0;
                    arr[startInt - 4] = score;
                    startInt++;
                }
                return arr;
            }
        }

    }
}
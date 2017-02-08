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

    static getTotalHoursWorked(shifts) {
        let sum = 0;
        for (let i = 0; i < shifts.length; i++) {
            sum += this.getShiftDuration(shifts[i]);
        }
        return Math.round(sum);
    }

}
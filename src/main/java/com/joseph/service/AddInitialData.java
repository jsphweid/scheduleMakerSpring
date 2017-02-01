package com.joseph.service;

import com.joseph.model.*;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service("addInitialData")
public class AddInitialData {

    @Resource(name = "employeeService")
    private EmployeeService employeeService;
    @Resource(name = "positionService")
    private PositionService positionService;
    @Resource(name = "dayPredictionService")
    private DayPredictionService dayPredictionService;
    @Resource(name = "weekPredictionService")
    private WeekPredictionService weekPredictionService;
    @Resource(name = "shiftService")
    private ShiftService shiftService;

    public boolean isAdded = false;

    public void addEmployees() {
        Employee emp1 = new Employee();
        emp1.setFirstName("Joseph");
        emp1.setLastName("Weidinger");
        emp1.setBelongsTo("joseph");
        emp1.setScore(28);
        emp1.setHourlyWage(10);
        emp1.setMinHours(0);
        emp1.setMaxHours(5);
        employeeService.save(emp1);

        Employee emp2 = new Employee();
        emp2.setFirstName("Brian");
        emp2.setLastName("Johnson");
        emp2.setBelongsTo("joseph");
        emp2.setScore(25);
        emp2.setHourlyWage(9);
        emp2.setMinHours(25);
        emp2.setMaxHours(30);
        employeeService.save(emp2);

        Employee emp3 = new Employee();
        emp3.setFirstName("Teddy");
        emp3.setLastName("Roosevelt");
        emp3.setBelongsTo("clayton");
        emp3.setScore(10);
        emp3.setHourlyWage(6);
        emp3.setMinHours(4);
        emp3.setMaxHours(29);
        employeeService.save(emp3);
    }

    public void addPositions() {
        Position p1 = new Position();
        p1.setTitle("joseph rolling");
        p1.setBelongsTo("joseph");
        positionService.save(p1);

        Position p2 = new Position();
        p2.setTitle("clayton thinking");
        p2.setBelongsTo("clayton");
        positionService.save(p2);

        Position p3 = new Position();
        p3.setTitle("ovens");
        p3.setBelongsTo("joseph");
        positionService.save(p3);

    }
    
    public void addDayPredictions() {
        DayPrediction dp1 = new DayPrediction();
        dp1.setTitle("1 day");
        dp1.setHour00(0);
        dp1.setHour01(0);
        dp1.setHour02(0);
        dp1.setHour03(0);
        dp1.setHour04(0);
        dp1.setHour05(0);
        dp1.setHour06(0);
        dp1.setHour07(20);
        dp1.setHour08(50);
        dp1.setHour09(60);
        dp1.setHour10(70);
        dp1.setHour11(92);
        dp1.setHour12(60);
        dp1.setHour13(40);
        dp1.setHour14(30);
        dp1.setHour15(33);
        dp1.setHour16(31);
        dp1.setHour17(10);
        dp1.setHour18(5);
        dp1.setHour19(1);
        dp1.setHour20(2);
        dp1.setHour21(0);
        dp1.setHour22(0);
        dp1.setHour23(20);
        dp1.setBelongsTo("joseph");
        dayPredictionService.save(dp1);

        DayPrediction dp2 = new DayPrediction();
        dp2.setTitle("another day");
        dp2.setHour00(0);
        dp2.setHour01(0);
        dp2.setHour02(0);
        dp2.setHour03(0);
        dp2.setHour04(0);
        dp2.setHour05(0);
        dp2.setHour06(0);
        dp2.setHour07(20);
        dp2.setHour08(50);
        dp2.setHour09(60);
        dp2.setHour10(70);
        dp2.setHour11(92);
        dp2.setHour12(60);
        dp2.setHour13(40);
        dp2.setHour14(30);
        dp2.setHour15(33);
        dp2.setHour16(31);
        dp2.setHour17(10);
        dp2.setHour18(5);
        dp2.setHour19(1);
        dp2.setHour20(2);
        dp2.setHour21(0);
        dp2.setHour22(0);
        dp2.setBelongsTo("joseph");
        dayPredictionService.save(dp2);
    }

    public void addWeekPredictions() {
        WeekPrediction wp1 = new WeekPrediction();
        wp1.setTitle("week prediction 1");
        wp1.setBelongsTo("joseph");
        wp1.setDay0Id(2);
        wp1.setDay1Id(1);
        wp1.setDay2Id(2);
        wp1.setDay3Id(1);
        wp1.setDay4Id(2);
        wp1.setDay5Id(1);
        wp1.setDay6Id(1);
        weekPredictionService.save(wp1);

        WeekPrediction wp2 = new WeekPrediction();
        wp2.setTitle("week prediction 1");
        wp2.setBelongsTo("joseph");
        wp2.setDay0Id(1);
        wp2.setDay1Id(1);
        wp2.setDay2Id(1);
        wp2.setDay3Id(1);
        wp2.setDay4Id(1);
        wp2.setDay5Id(1);
        wp2.setDay6Id(1);
        weekPredictionService.save(wp2);
    }

    public void addEmployeesPositions() {
        Position p1 = positionService.getPosition(1);
        Position p2 = positionService.getPosition(2);
        Position p3 = positionService.getPosition(3);

        Employee emp1 = employeeService.getEmployee(1);
        Employee emp2 = employeeService.getEmployee(2);
        Employee emp3 = employeeService.getEmployee(3);


        Set<Position> pList = new HashSet<Position>();
        pList.add(p1);
        pList.add(p3);
        emp1.setPositions(pList);

        Set<Position> pList2 = new HashSet<Position>();
        pList2.add(p1);
        emp2.setPositions(pList2);

        Set<Position> pList3 = new HashSet<Position>();
        pList3.add(p2);
        emp3.setPositions(pList3);
        employeeService.save(emp1);
        employeeService.save(emp2);
        employeeService.save(emp3);
    }

    public void addShifts() {
        Shift s1 = new Shift();
        s1.setStartHour(4);
        s1.setStartMinutes(15);
        s1.setEndHour(0);
        s1.setEndMinutes(0);

        Shift s2 = new Shift();
        s2.setStartHour(9);
        s2.setStartMinutes(0);
        s2.setEndHour(17);
        s2.setEndMinutes(0);

        s1.setBelongsTo("joseph");
        s2.setBelongsTo("joseph");

        shiftService.save(s1);
        shiftService.save(s2);

        Shift s3 = new Shift();
        s3.setStartHour(4);
        s3.setStartMinutes(15);
        s3.setEndHour(0);
        s3.setEndMinutes(0);

        Shift s4 = new Shift();
        s4.setStartHour(9);
        s4.setStartMinutes(0);
        s4.setEndHour(17);
        s4.setEndMinutes(0);

        s3.setBelongsTo("clayton");
        s4.setBelongsTo("clayton");

        shiftService.save(s3);
        shiftService.save(s4);
    }

    public void addEmployeesShifts() {
        Shift s1 = shiftService.getShift(1);
        Shift s2 = shiftService.getShift(2);

        Employee emp1 = employeeService.getEmployee(1);
        Employee emp2 = employeeService.getEmployee(2);
        Employee emp3 = employeeService.getEmployee(3);

        Set<Shift> shiftSet1 = new HashSet<Shift>();
        shiftSet1.add(s1);
        shiftSet1.add(s2);

        emp1.setShifts(shiftSet1);
        emp3.setShifts(shiftSet1);

        Set<Shift> shiftSet2 = new HashSet<Shift>();
        shiftSet2.add(s2);

        emp2.setShifts(shiftSet2);

        employeeService.save(emp1);
        employeeService.save(emp2);
        employeeService.save(emp3);
    }

}

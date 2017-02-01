package com.joseph.service;

import com.joseph.model.DayPrediction;
import com.joseph.model.Employee;
import com.joseph.model.Position;
import com.joseph.model.WeekPrediction;
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
        Set<Position> pList = new HashSet<Position>();
        pList.add(p1);
        pList.add(p3);
        emp1.setPositions(pList);

        Employee emp2 = employeeService.getEmployee(2);
        Set<Position> pList2 = new HashSet<Position>();
        pList2.add(p1);
        emp2.setPositions(pList2);

        Employee emp3 = employeeService.getEmployee(3);
        Set<Position> pList3 = new HashSet<Position>();
        pList3.add(p2);
        emp3.setPositions(pList3);
        employeeService.save(emp1);
        employeeService.save(emp2);
        employeeService.save(emp3);
    }

}

package com.joseph.service;

import com.joseph.model.DayPrediction;
import com.joseph.model.Employee;
import com.joseph.model.Position;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("addInitialData")
public class AddInitialData {

    @Resource(name = "employeeService")
    private EmployeeService employeeService;
    @Resource(name = "positionService")
    private PositionService positionService;
    @Resource(name = "dayPredictionService")
    private DayPredictionService dayPredictionService;

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
        System.out.println("adding new positions ----------->");
        Position p1 = new Position();
        p1.setTitle("joseph rolling");
        p1.setBelongsTo("joseph");
        positionService.save(p1);

        Position p2 = new Position();
        p2.setTitle("clayton thinking");
        p2.setBelongsTo("clayton");
        positionService.save(p2);
    }
    
    public void addDayPredictions() {
        DayPrediction dp1 = new DayPrediction();
        dp1.setTitle("generatedDayPrediction");
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
        dp1.setBelongsTo("joseph");
        dayPredictionService.save(dp1);
    }

}

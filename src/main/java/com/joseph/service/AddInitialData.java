package com.joseph.service;

import com.joseph.model.Employee;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("addInitialData")
public class AddInitialData {

    @Resource(name = "employeeService")
    private EmployeeService employeeService;

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
        emp3.setScore(5);
        emp3.setHourlyWage(6);
        emp3.setMinHours(4);
        emp3.setMaxHours(29);
        employeeService.save(emp3);
    }

}

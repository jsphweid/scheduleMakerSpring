package com.joseph.service;

import com.joseph.model.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> findAllEmployees();

    Employee save(Employee employee);

    Employee getEmployee(int id);

    Employee update(Employee employee);
}

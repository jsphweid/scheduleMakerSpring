package com.joseph.service;

import com.joseph.model.Employee;
import com.joseph.model.Position;

import java.util.List;
import java.util.Set;

public interface EmployeeService {
    List<Employee> findAllEmployees();

    Employee save(Employee employee);

    Employee getEmployee(int id);

    Employee update(Employee employee);

    void delete(int id);

    void writeEmployeePositionChanges(String jsonChanges);

}

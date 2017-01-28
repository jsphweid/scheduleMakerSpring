package com.joseph.repository;

import com.joseph.model.Employee;

import java.util.List;

public interface EmployeeRepository {

    List<Employee> loadAll();

    Employee save(Employee employee);

    Employee getEmpById(int id);

    Employee update(Employee employee);
}

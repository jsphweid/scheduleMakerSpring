package com.joseph.service;

import com.joseph.model.Employee;
import com.joseph.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> findAllEmployees() {
        return employeeRepository.loadAll();
    }

    @Transactional
    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Transactional
    public Employee update(Employee employee) {
        return employeeRepository.update(employee);
    }

    @Transactional
    public void delete(int id) {
        employeeRepository.delete(id);
    }

    public Employee getEmployee(int id) {
        return employeeRepository.getEmpById(id);
    }
}

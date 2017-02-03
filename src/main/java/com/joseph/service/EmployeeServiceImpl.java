package com.joseph.service;

import com.joseph.model.Employee;
import com.joseph.model.Position;
import com.joseph.model.Shift;
import com.joseph.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private PositionService positionService;
    @Autowired
    private ShiftService shiftService;

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
        // TODO: shouldn't have to do this...
        // delete all associated positions first
        Employee emp = employeeRepository.getEmpById(id);
        Set<Position> positions = emp.getPositions();
        positions.clear();
        emp.setPositions(positions);
        employeeRepository.save(emp);
        shiftService.deleteShiftsBelongingToEmp(id);


        // then finally delete
        employeeRepository.delete(id);
    }

    @Transactional
    public void writeEmployeePositionChanges(String jsonChanges) {
        // empty it
        deleteAllPositionsInEachEmployee(employeeRepository.loadAll());
        // process
        // TODO: Refactor this to use ajax and not passing strings back and forth
        String[] todos = jsonChanges.split(",");
        for (String todo : todos) {
            String[] empPoses = todo.split("-");
            int emp = Integer.parseInt(empPoses[0]);
            int pos = Integer.parseInt(empPoses[1]);
            Employee e = getEmployee(emp);
            Set<Position> herPositions = e.getPositions();
            herPositions.add(positionService.getPosition(pos));
            e.setPositions(herPositions);
            save(e);
        }
    }

    private List<Employee> deleteAllPositionsInEachEmployee(List<Employee> employees) {
        for (Employee emp : employees) {
            emp.setPositions(new HashSet<Position>());
        }
        return employees;
    }

    public Employee getEmployee(int id) {
        return employeeRepository.getEmpById(id);
    }
}

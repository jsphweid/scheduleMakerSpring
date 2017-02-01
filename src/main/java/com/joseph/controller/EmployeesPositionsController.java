package com.joseph.controller;

import com.joseph.model.Employee;
import com.joseph.model.Position;
import com.joseph.service.EmployeeService;
import com.joseph.service.PositionService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class EmployeesPositionsController {

    @Resource(name = "employeeService")
    private EmployeeService employeeService;

    @Resource(name = "positionService")
    private PositionService positionService;

    @RequestMapping(value = "/manageEmployeesPositions", method = RequestMethod.GET)
    public String manageEmployeesPositions(Model model) {
        List<Employee> employees = employeeService.findAllEmployees();
        List<Position> positions = positionService.findAllPositions();
        model.addAttribute("employees", employees);
        model.addAttribute("positions", positions);
        return "manageEmployeesPositions";
    }

    @RequestMapping(value = "/editEmployeesPositions", method = RequestMethod.GET)
    public String editEmployeesPositions(Model model) {
        List<Employee> employees = employeeService.findAllEmployees();
        List<Position> positions = positionService.findAllPositions();
        model.addAttribute("employees", employees);
        model.addAttribute("positions", positions);
        return "editEmployeesPositions";
    }

    @RequestMapping(value = "/updateEmployeesPositions", method = RequestMethod.POST)
    public String updateEmployeesPositions(@RequestParam("jsonChanges") String jsonChanges) {
        employeeService.writeEmployeePositionChanges(jsonChanges);
        return "redirect:/manageEmployeesPositions";
    }
}

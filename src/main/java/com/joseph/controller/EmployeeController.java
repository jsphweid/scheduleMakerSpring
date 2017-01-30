package com.joseph.controller;

import com.joseph.model.Employee;
import com.joseph.service.EmployeeService;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

@Controller
public class EmployeeController {

    @Resource(name = "employeeService")
    private EmployeeService employeeService;

    @Autowired
    private SessionService session;

    @RequestMapping(value = "/manageEmployees", method = RequestMethod.GET)
    public String getEmployees(Model model) {
        List<Employee> employees = employeeService.findAllEmployees();
        model.addAttribute("employees", employees);
        return "manageEmployees";
    }

    @RequestMapping(value = "/addEmployee", method = RequestMethod.GET)
    public String addEmployee(Model model) {
        Employee employee = new Employee();
        employee.setBelongsTo(session.getSessionUsername());
        model.addAttribute("employee", employee);
        return "addEmployee";
    }

    @RequestMapping(value = "/addEmployee", method = RequestMethod.POST)
    public String newEmployee(@Valid @ModelAttribute("employee") Employee employee, BindingResult result) {

        if (result.hasErrors()) {
            return "addEmployee";
        } else {
            employeeService.save(employee);
        }
        return "redirect:/manageEmployees.html";
    }


    @RequestMapping(value = "/editEmployee/{id}", method = RequestMethod.GET)
    public String editEmployee(@PathVariable int id, Model model) {
        Employee employee = employeeService.getEmployee(id);
        model.addAttribute("employee", employee);
        return "editEmployee";
    }

    @RequestMapping(value = "/updateEmployee", method = RequestMethod.POST)
    public String updateEmployee(@Valid @ModelAttribute("employee") Employee employee,
                                 BindingResult result) {
        if (result.hasErrors()) {
            return "editEmployee/{id}";
        } else {
            employeeService.update(employee);
        }
        return "redirect:manageEmployees.html";
    }

    @RequestMapping(value = "/editEmployee/delete/{id}", method = RequestMethod.GET)
    public String deleteEmployee(@PathVariable int id, Model model) {
        employeeService.delete(id);
        return "redirect:/manageEmployees.html";
    }

}

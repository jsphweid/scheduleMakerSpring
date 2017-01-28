package com.joseph.controller;

import com.joseph.model.Employee;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EmployeeController {

    @RequestMapping(value = "/manageEmployees", method = RequestMethod.GET)
    public String getEmployees(@ModelAttribute ("employee") Employee employee) {

        return "manageEmployees";
    }
}

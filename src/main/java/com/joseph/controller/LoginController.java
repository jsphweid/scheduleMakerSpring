package com.joseph.controller;

import com.joseph.service.AddInitialData;
import com.joseph.service.EmployeeService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;

@Controller
public class LoginController {

//    temp/
    @Resource(name = "addInitialData")
    private AddInitialData addInitialData;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(ModelMap model) {
        if (!addInitialData.isAdded) {
            addInitialData.addEmployees();
            addInitialData.addPositions();
            addInitialData.addDayPredictions();
            addInitialData.addWeekPredictions();
            addInitialData.isAdded = true;
        }
        return "login";
    }

    @RequestMapping(value = "/loginFailed", method = RequestMethod.GET)
    public String loginFailed(ModelMap model) {
        model.addAttribute("error", true);
        return "login";
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(ModelMap model) {
        return "logout";
    }

    @RequestMapping(value = "/403", method = RequestMethod.GET)
    public String error403(ModelMap model) {
        return "403";
    }
}

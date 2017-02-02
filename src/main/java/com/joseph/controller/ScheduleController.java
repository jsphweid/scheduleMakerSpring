package com.joseph.controller;

import com.joseph.model.Employee;
import com.joseph.model.Schedule;
import com.joseph.service.EmployeeService;
import com.joseph.service.ScheduleService;
import com.joseph.service.SessionService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class ScheduleController {

    @Resource(name = "sessionService")
    private SessionService sessionService;

    @Resource(name = "scheduleService")
    private ScheduleService scheduleService;

    @Resource(name = "employeeService")
    private EmployeeService employeeService;

    @RequestMapping(value = "/manageSchedules", method = RequestMethod.GET)
    public String manageSchedules(Model model) {
        List<Schedule> schedules = scheduleService.findAllSchedules();
        model.addAttribute("schedules", schedules);
        return "manageSchedules";
    }

    @RequestMapping(value = "/editSchedule/{id}", method = RequestMethod.GET)
    public String editSchedule(Model model, @PathVariable int id) {
        Schedule schedule = scheduleService.getScheduleById(id);
        if (!sessionService.getSessionUsername().equals(schedule.getBelongsTo())) return "403.html";
        List<Employee> employees = employeeService.findAllEmployees();

        model.addAttribute("schedule", schedule);
        model.addAttribute("employees", employees); // eventually, only active employees
        return "editSchedule";
    }

}

package com.joseph.controller;

import com.google.gson.Gson;
import com.joseph.model.*;
import com.joseph.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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

    @Resource(name = "positionService")
    private PositionService positionService;

    @Resource(name = "shiftService")
    private ShiftService shiftService;

    @RequestMapping(value = "/manageSchedules", method = RequestMethod.GET)
    public String manageSchedules(Model model) {
        List<Schedule> schedules = scheduleService.findAllSchedules();
        model.addAttribute("schedules", schedules);
        return "manageSchedules";
    }

    @RequestMapping(value = "/editSchedule/{id}", method = RequestMethod.GET)
    public String editSchedule(@PathVariable int id) {
        Schedule schedule = scheduleService.getScheduleById(id);
        if (!sessionService.getSessionUsername().equals(schedule.getBelongsTo())) return "403.html";
        return "editSchedule";
    }

    @RequestMapping(value = "/getSchedule/{id}", method = RequestMethod.GET)
    public @ResponseBody Schedule getSchedule(@PathVariable int id) {
        if (!sessionService.getSessionUsername().equals(scheduleService.getScheduleById(id).getBelongsTo())) return null;
        return scheduleService.getScheduleById(id);

    }

}

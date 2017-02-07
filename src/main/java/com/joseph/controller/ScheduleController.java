package com.joseph.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.joseph.model.*;
import com.joseph.service.*;
import com.joseph.types.TitleId;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

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

    private static Gson gson = new Gson();

    @RequestMapping(value = "/manageSchedules", method = RequestMethod.GET)
    public String manageSchedules(Model model) {
        List<Schedule> schedules = scheduleService.findAllSchedules();
        model.addAttribute("schedules", schedules);
        return "manageSchedules";
    }

    @RequestMapping(value = "/editSchedule/{id}", method = RequestMethod.GET)
    public String editSchedule(@PathVariable int id, Model model) {
        Schedule schedule = scheduleService.getScheduleById(id);
        if (!sessionService.getSessionUsername().equals(schedule.getBelongsTo())) return "403.html";
        model.addAttribute("id", id);
        return "editSchedule";
    }

    @RequestMapping(value = "/getSchedule/{id}", method = RequestMethod.GET)
    public @ResponseBody Schedule getSchedule(@PathVariable int id) {
        if (!sessionService.getSessionUsername().equals(scheduleService.getScheduleById(id).getBelongsTo())) return null;
        return scheduleService.getScheduleById(id);

    }

    @RequestMapping(value = "/getEmployees", method = RequestMethod.GET)
    public @ResponseBody List<Employee> getEmployees() {
        return employeeService.findAllEmployees();
    }

    @RequestMapping(value = "/editSchedule/saveShifts", method = RequestMethod.POST)
    public String saveShifts( ArrayList<Employee> empArray) {
        System.out.println("in here....");
        System.out.println(empArray);
        return "redirect:manageSchedules.html";
    }

    @RequestMapping(value = "/editSchedule/saveShiftsObj", method = RequestMethod.POST)
    public void saveShiftsObj(@RequestParam("empArray") Object employeeArray) {
//        return "redirect:manageSchedules.html";
    }

    @ResponseBody
    @RequestMapping(value = "/editSchedule/setNewTitle", method = RequestMethod.POST)
    public void setNewTitle(@RequestParam("data") String json) {

        System.out.println(json);

//        ObjectMapper mapper = new ObjectMapper();
//        TitleId obj = mapper.readValue(json, TitleId.class);


    }
}
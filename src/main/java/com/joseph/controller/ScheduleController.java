package com.joseph.controller;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.joseph.model.*;
import com.joseph.service.*;
import com.joseph.types.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
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

    @Resource(name = "weekPredictionService")
    private WeekPredictionService weekPredictionService;

    @RequestMapping(value = "/manageSchedules", method = RequestMethod.GET)
    public String manageSchedules(Model model) {
        List<Schedule> schedules = scheduleService.findAllSchedules();
        model.addAttribute("schedules", schedules);
        return "manageSchedules";
    }

    @RequestMapping(value = "/addSchedule", method = RequestMethod.GET)
    public String addSchedule(Model model) {
        Schedule newSchedule = new Schedule();
        newSchedule.setBelongsTo(sessionService.getSessionUsername());
        newSchedule.setTitle("My New Schedule");
        scheduleService.save(newSchedule);
        int newId = newSchedule.getId();
        model.addAttribute("id", newSchedule.getId());
        return "redirect:/editSchedule/" + Integer.toString(newId);
    }

    @RequestMapping(value = "/editSchedule/{id}", method = RequestMethod.GET)
    public String editSchedule(@PathVariable int id, Model model) {
        Schedule schedule = scheduleService.getScheduleById(id);
        if (!sessionService.getSessionUsername().equals(schedule.getBelongsTo())) return "403";
        model.addAttribute("id", id);
        return "editSchedule";
    }

    @RequestMapping(value = "/editSchedule/deleteSchedule/{id}", method = RequestMethod.GET)
    public String deleteSchedule(@PathVariable int id) {
        if (!sessionService.getSessionUsername().equals(scheduleService.getScheduleById(id).getBelongsTo())) return "403";
        scheduleService.delete(scheduleService.getScheduleById(id));
        return "redirect:/manageSchedules.html";
    }

    @ResponseBody
    @RequestMapping(value = "/getSchedule/{id}", method = RequestMethod.GET)
    public Schedule getSchedule(@PathVariable int id) {
        if (!sessionService.getSessionUsername().equals(scheduleService.getScheduleById(id).getBelongsTo()))
            return null;
        return scheduleService.getScheduleById(id);

    }

    @ResponseBody
    @RequestMapping(value = "/getWeekPredictions", method = RequestMethod.GET)
    public List<WeekPrediction> getWeekPredictions() {
        return weekPredictionService.findAllWeekPredictions();
    }

    @ResponseBody
    @RequestMapping(value = "/getEmployees", method = RequestMethod.GET)
    public List<Employee> getEmployees() {
        return employeeService.findAllEmployees();
    }

    @RequestMapping(value = "/editSchedule/saveShifts", method = RequestMethod.POST)
    public String saveShifts(ArrayList<Employee> empArray) {
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
    public void setNewTitle(@RequestBody String json) {

        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        try {
            TitleId obj = mapper.readValue(json, TitleId.class);
            Schedule schedule = scheduleService.getScheduleById(obj.id);
            schedule.setTitle(obj.title);
            scheduleService.save(schedule);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @ResponseBody
    @RequestMapping(value = "/editSchedule/editExistingShift", method = RequestMethod.POST)
    public void editExistingShift(@RequestBody String json) {

        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        try {
            ExistingShift obj = mapper.readValue(json, ExistingShift.class);
            Shift shift = shiftService.getShift(obj.id);
            shift.setStartHour(obj.startHour);
            shift.setStartMinutes(obj.startMinutes);
            shift.setEndHour(obj.endHour);
            shift.setEndMinutes(obj.endMinutes);
            shiftService.save(shift);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @ResponseBody
    @RequestMapping(value = "/editSchedule/addNewShift", method = RequestMethod.POST)
    public String addNewShift(@RequestBody String json) {

        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        try {
            NewShift newShift = mapper.readValue(json, NewShift.class);
            Shift shift = new Shift();
            shift.setBelongsTo(newShift.belongsTo);
            shift.setDayId(newShift.dayId);
            shift.setSchedule(scheduleService.getScheduleById(newShift.scheduleId));
            shift.setEmployee(employeeService.getEmployee(newShift.empId));
            shift.setStartHour(0);
            shift.setStartMinutes(0);
            shift.setEndHour(0);
            shift.setEndMinutes(0);
            shiftService.save(shift);
            return mapper.writeValueAsString(shift);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "error";
    }

    @ResponseBody
    @RequestMapping(value = "/editSchedule/deleteShift", method = RequestMethod.POST)
    public String deleteShift(@RequestBody String json) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

        try {
            ShiftIdEmpId shiftIdEmpId = mapper.readValue(json, ShiftIdEmpId.class);
            Employee employee = employeeService.getEmployee(shiftIdEmpId.empId);
            List<Shift> shifts = employee.getShifts();
                for (Iterator<Shift> iter = shifts.listIterator(); iter.hasNext(); ) {
                Shift shift = iter.next();
                if (shift.getId() == shiftIdEmpId.shiftId) {
                    iter.remove();
                    shiftService.delete(shift.getId());
                }
            }
            employeeService.save(employee);
            return mapper.writeValueAsString(employeeService.findAllEmployees());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    @ResponseBody
    @RequestMapping(value = "/editSchedule/changeWeekPrediction", method = RequestMethod.POST)
    public String changeWeekPrediction(@RequestBody String json) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        try {
            ScheduleIdWeekPredictionId scheduleIdWeekPredictionId = mapper.readValue(json, ScheduleIdWeekPredictionId.class);
            Schedule schedule = scheduleService.getScheduleById(scheduleIdWeekPredictionId.scheduleId);
            schedule.setWeekPrediction(weekPredictionService.getById(scheduleIdWeekPredictionId.weekPredictionId));
            scheduleService.save(schedule);
            return mapper.writeValueAsString(schedule.getWeekPrediction());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

}
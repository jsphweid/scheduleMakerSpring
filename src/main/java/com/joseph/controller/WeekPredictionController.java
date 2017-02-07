package com.joseph.controller;

import com.joseph.model.DayPrediction;
import com.joseph.model.WeekPrediction;
import com.joseph.service.DayPredictionService;
import com.joseph.service.SessionService;
import com.joseph.service.WeekPredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;
import java.util.List;

@Controller
public class WeekPredictionController {

    @Autowired
    private WeekPredictionService weekPredictionService;

    @Autowired
    private DayPredictionService dayPredictionService;

    @Autowired
    private SessionService session;

    @RequestMapping(value = "/manageWeekPredictions", method = RequestMethod.GET)
    public String manageWeekPredictionsPage(Model model) {
        List<WeekPrediction> allWeekPredictions = weekPredictionService.findAllWeekPredictions();
        model.addAttribute("allWeekPredictions", allWeekPredictions);
        model.addAttribute("idToTextMap", weekPredictionService.getIdTitleMap());
        return "manageWeekPredictions";
    }

    @RequestMapping(value = "/addWeekPrediction", method = RequestMethod.GET)
    public String addWeekPredictionPage(Model model) {
        WeekPrediction weekPrediction = new WeekPrediction();
        weekPrediction.setBelongsTo(session.getSessionUsername());
        model.addAttribute("weekPrediction", weekPrediction);
        model.addAttribute("allDayPredictions", dayPredictionService.findAllDayPredictions());
        return "addWeekPrediction";
    }

    @RequestMapping(value = "/addWeekPrediction", method = RequestMethod.POST)
    public String addWeekPrediction(@Valid
                                    @ModelAttribute("weekPrediction") WeekPrediction weekPrediction,
                                    BindingResult result) {
        if (result.hasErrors()) {
            return "addWeekPrediction";
        } else {
            weekPredictionService.save(weekPrediction);
        }
        return "redirect:manageWeekPredictions.html";
    }

    @RequestMapping(value = "/editWeekPrediction/{id}", method = RequestMethod.GET)
    public String editWeekPrediction(@PathVariable int id,  Model model) {
        WeekPrediction weekPrediction = weekPredictionService.getById(id);
        if (!session.getSessionUsername().equals(weekPrediction.getBelongsTo())) return "403";
        model.addAttribute("currentDaysAsJSONString", weekPredictionService.getDaysAsJSON(weekPrediction));
        model.addAttribute("weekPrediction", weekPrediction);
        model.addAttribute("allDayPredictions", dayPredictionService.findAllDayPredictions());
        return "editWeekPrediction";
    }

    @RequestMapping(value = "/updateWeekPrediction", method = RequestMethod.POST)
    public String updateWeekPrediction(@Valid
                                       @ModelAttribute("weekPrediction") WeekPrediction weekPrediction,
                                       BindingResult result) {

        if (result.hasErrors()) {
            return "redirect:/editWeekPrediction/" + weekPrediction.getId();
        } else {
            weekPredictionService.update(weekPrediction);
        }
        return "redirect:/manageWeekPredictions.html";
    }

    @RequestMapping(value = "/editWeekPrediction/delete/{id}", method = RequestMethod.GET)
    public String deleteWeekPrediction(@PathVariable int id) {
        if (!session.getSessionUsername().equals(weekPredictionService.getById(id).getBelongsTo())) return "403";
        weekPredictionService.delete(id);
        return "redirect:/manageWeekPredictions.html";
    }
}

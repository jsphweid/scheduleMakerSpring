package com.joseph.controller;

import com.joseph.model.WeekPrediction;
import com.joseph.service.SessionService;
import com.joseph.service.WeekPredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class WeekPredictionController {

    @Autowired
    private WeekPredictionService weekPredictionService;

    @Autowired
    private SessionService session;

    @RequestMapping(value = "/manageWeekPredictions", method = RequestMethod.GET)
    public String manageWeekPredictionsPage(Model model) {
        List<WeekPrediction> allWeekPredictions = weekPredictionService.findAllWeekPredictions();
        model.addAttribute("allWeekPredictions", allWeekPredictions);
        return "manageWeekPredictions";
    }

    @RequestMapping(value = "/editWeekPrediction/{id}", method = RequestMethod.POST)
    public String editWeekPrediction(@PathVariable int id,  Model model) {
        WeekPrediction weekPrediction = weekPredictionService.getById(id);
        if (!session.getSessionUsername().equals(weekPrediction.getBelongsTo())) return "403";
        model.addAttribute("weekPrediction", weekPrediction);
        return "editWeekPrediction";
    }
}

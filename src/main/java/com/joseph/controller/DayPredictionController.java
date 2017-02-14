package com.joseph.controller;

import com.joseph.model.DayPrediction;
import com.joseph.service.DayPredictionService;
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
public class DayPredictionController {

    @Resource
    private DayPredictionService dayPredictionService;

    @Autowired
    private SessionService session;

    @RequestMapping(value = "/manageDayPredictions", method = RequestMethod.GET)
    public String getDayPredicitons(Model model) {
        List<DayPrediction> dayPredictions = dayPredictionService.findAllDayPredictions();
        model.addAttribute("dayPredictions", dayPredictions);
        return "manageDayPredictions";
    }

    @RequestMapping(value = "/addDayPrediction", method = RequestMethod.GET)
    public String addDayPredictionPage(Model model) {
        DayPrediction dayPrediction = new DayPrediction();
        dayPrediction.setBelongsTo(session.getSessionUsername());
        model.addAttribute("dayPrediction", dayPrediction);
        return "addDayPrediction";
    }

    @RequestMapping(value = "/addDayPrediction", method = RequestMethod.POST)
    public String addDayPrediction(@Valid
                                   @ModelAttribute("dayPrediction") DayPrediction dayPrediction,
                                   BindingResult result,
                                   Model model) {
        if (result.hasErrors()) {
            model.addAttribute("dayPrediction", dayPrediction);
            return "addDayPrediction";
        } else {
            dayPredictionService.save(dayPrediction);
        }
        return "redirect:manageDayPredictions.html";
    }

    @RequestMapping(value = "/showDayPrediction/{id}", method = RequestMethod.GET)
    public String showDayPrediction(@PathVariable int id, Model model) {
        DayPrediction dayPrediction = dayPredictionService.getDayPrediction(id);
        if (!session.getSessionUsername().equals(dayPrediction.getBelongsTo())) return "403";
        model.addAttribute("dayPredictionJSON", dayPrediction.toString());
        model.addAttribute("dayPrediction", dayPrediction);
        return "showDayPrediction";
    }

    @RequestMapping(value = "/editDayPrediction/{id}", method = RequestMethod.GET)
    public String editDayPrediction(@PathVariable int id, Model model) {
        DayPrediction dayPrediction = dayPredictionService.getDayPrediction(id);
        if (!session.getSessionUsername().equals(dayPrediction.getBelongsTo())) return "403";
        model.addAttribute("dayPredictionJSON", dayPrediction.toString());
        model.addAttribute("dayPrediction", dayPrediction);
        return "editDayPrediction";
    }

    @RequestMapping(value = "/updateDayPrediction/{id}", method = RequestMethod.POST)
    public String updateEmployee(@Valid
                                 @ModelAttribute("dayPrediction") DayPrediction dayPrediction,
                                 BindingResult result,
                                 @PathVariable int id) {
        if (!session.getSessionUsername().equals(dayPredictionService.getDayPrediction(id).getBelongsTo())) return "403";
        if (result.hasErrors()) {
            return "redirect:/editDayPrediction/" + id;
        } else {
            dayPredictionService.update(dayPrediction);
        }
        return "redirect:/showDayPrediction/" + id;
    }

    @RequestMapping(value = "/editDayPrediction/delete/{id}", method = RequestMethod.GET)
    public String deleteEmployee(@PathVariable int id) {
        if (!session.getSessionUsername().equals(dayPredictionService.getDayPrediction(id).getBelongsTo())) return "403";
        dayPredictionService.delete(id);
        return "redirect:/manageDayPredictions.html";
    }

}

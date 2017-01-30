package com.joseph.controller;

import com.joseph.model.Position;
import com.joseph.service.PositionService;
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
public class PositionController {

    @Resource(name = "positionService")
    private PositionService positionService;

    @Autowired
    private SessionService session;

    @RequestMapping(value = "/managePositions", method = RequestMethod.GET)
    public String managePositions(Model model) {
        List<Position> positions = positionService.findAllPositions();
        model.addAttribute("positions", positions);
        return "managePositions";
    }

    @RequestMapping(value = "/editPosition/{id}", method = RequestMethod.GET)
    public String editPosition(@PathVariable int id, Model model) {
        Position position = positionService.getPosition(id);
        if (!session.getSessionUsername().equals(position.getBelongsTo())) return "403";
        model.addAttribute("position", position);
        return "editPosition";
    }

    @RequestMapping(value = "/updatePosition", method = RequestMethod.POST)
    public String updatePosition(@Valid @ModelAttribute("position") Position position,
                                 BindingResult result) {
        if (result.hasErrors()) {
            return "editPosition/{id}";
        } else {
            positionService.update(position);
        }
        return "redirect:managePositions.html";
    }

    @RequestMapping(value = "/addPosition", method = RequestMethod.GET)
    public String addPositionScreen(Model model) {
        Position position = new Position();
        position.setBelongsTo(session.getSessionUsername());
        model.addAttribute(position);
        return "addPosition";
    }

    @RequestMapping(value = "/addPosition", method = RequestMethod.POST)
    public String addPosition(@Valid @ModelAttribute("position") Position position, BindingResult result) {
        if (result.hasErrors()) {
            return "addPosition";
        } else {
            positionService.update(position);
        }
        return "redirect:managePositions.html";
    }

    @RequestMapping(value = "/editPosition/delete/{id}", method = RequestMethod.GET)
    public String deletePosition(@PathVariable int id, Model model) {
        if (!session.getSessionUsername().equals(positionService.getPosition(id).getBelongsTo())) return "403";
        positionService.delete(id);
        return "redirect:/managePositions.html";
    }
}

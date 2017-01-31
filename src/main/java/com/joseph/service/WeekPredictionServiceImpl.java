package com.joseph.service;

import com.joseph.model.DayPrediction;
import com.joseph.model.WeekPrediction;
import com.joseph.repository.DayPredictionRepository;
import com.joseph.repository.WeekPredictionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("weekPredictionService")
public class WeekPredictionServiceImpl implements WeekPredictionService {

    @Autowired
    private WeekPredictionRepository weekPredictionRepository;

    @Autowired
    private DayPredictionRepository dayPredictionRepository;

    @Transactional
    public WeekPrediction save(WeekPrediction weekPrediction) {
        return weekPredictionRepository.save(weekPrediction);
    }

    public List<WeekPrediction> findAllWeekPredictions() {
        return weekPredictionRepository.findAll();
    }

    public WeekPrediction getById(int id) {
        return weekPredictionRepository.getById(id);
    }

    public String getDaysAsJSON(WeekPrediction w) {
        return "{" +
                "\'day0Id\': " + w.getDay0Id() + "," +
                "\'day1Id\': " + w.getDay1Id() + "," +
                "\'day2Id\': " + w.getDay2Id() + "," +
                "\'day3Id\': " + w.getDay3Id() + "," +
                "\'day4Id\': " + w.getDay4Id() + "," +
                "\'day5Id\': " + w.getDay5Id() + "," +
                "\'day6Id\': " + w.getDay6Id() +
                "}";
    }

    public Map<Integer, String> getIdTitleMap() {

        List<DayPrediction> dayPredictions = dayPredictionRepository.loadAll();
        Map<Integer, String> ret = new HashMap<Integer, String>();
        for (DayPrediction dayPrediction : dayPredictions) {
            ret.put(dayPrediction.getId(), dayPrediction.getTitle());
        }
        return ret;
    }

    @Transactional
    public void delete(int id) {
        weekPredictionRepository.delete(id);
    }

    @Transactional
    public WeekPrediction update(WeekPrediction weekPrediction) {
        return weekPredictionRepository.update(weekPrediction);
    }
}

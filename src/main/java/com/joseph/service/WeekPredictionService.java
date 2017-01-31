package com.joseph.service;

import com.joseph.model.WeekPrediction;

import java.util.List;
import java.util.Map;

public interface WeekPredictionService {

    WeekPrediction save(WeekPrediction weekPrediction);

    List<WeekPrediction> findAllWeekPredictions();

    WeekPrediction getById(int id);

    String getDaysAsJSON(WeekPrediction weekPrediction);

    Map<Integer, String> getIdTitleMap();

    void delete(int id);

    WeekPrediction update(WeekPrediction weekPrediction);
}

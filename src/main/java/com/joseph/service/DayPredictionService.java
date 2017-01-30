package com.joseph.service;

import com.joseph.model.DayPrediction;

import java.util.List;

public interface DayPredictionService {
    List<DayPrediction> findAllDayPredictions();

    DayPrediction save(DayPrediction dayPrediction);

    DayPrediction getDayPrediction(int id);

    DayPrediction update(DayPrediction dayPrediction);

    void delete(int id);
}

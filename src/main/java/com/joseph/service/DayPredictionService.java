package com.joseph.service;

import com.joseph.model.DayPrediction;

import java.util.List;

public interface DayPredictionService {
    List<DayPrediction> findAllDayPredictions();

    DayPrediction save(DayPrediction dayPrediction);
}

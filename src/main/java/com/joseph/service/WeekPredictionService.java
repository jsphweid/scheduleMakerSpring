package com.joseph.service;

import com.joseph.model.WeekPrediction;

import java.util.List;

public interface WeekPredictionService {

    WeekPrediction save(WeekPrediction weekPrediction);

    List<WeekPrediction> findAllWeekPredictions();

    WeekPrediction getById(int id);
}

package com.joseph.repository;

import com.joseph.model.WeekPrediction;

import java.util.List;

public interface WeekPredictionRepository {
    WeekPrediction save(WeekPrediction weekPrediction);

    List<WeekPrediction> findAll();

    WeekPrediction getById(int id);

    void delete(int id);

    WeekPrediction update(WeekPrediction weekPrediction);
}

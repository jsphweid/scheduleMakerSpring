package com.joseph.repository;

import com.joseph.model.DayPrediction;

import java.util.List;

public interface DayPredictionRepository {
    List<DayPrediction> loadAll();

    DayPrediction save(DayPrediction dayPrediction);

    DayPrediction getDayPrediction(int id);

    DayPrediction update(DayPrediction dayPrediction);

    void delete(int id);
}

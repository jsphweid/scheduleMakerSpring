package com.joseph.service;

import com.joseph.model.DayPrediction;
import com.joseph.repository.DayPredictionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("dayPredictionService")
public class DayPredictionServiceImpl implements DayPredictionService {

    @Autowired
    DayPredictionRepository dayPredictionRepository;

    public List<DayPrediction> findAllDayPredictions() {
        return dayPredictionRepository.loadAll();
    }

    @Transactional
    public DayPrediction save(DayPrediction dayPrediction) {
        return dayPredictionRepository.save(dayPrediction);
    }

    public DayPrediction getDayPrediction(int id) {
        return dayPredictionRepository.getDayPrediction(id);
    }

    @Transactional
    public DayPrediction update(DayPrediction dayPrediction) {
        return dayPredictionRepository.update(dayPrediction);
    }

    @Transactional
    public void delete(int id) {
        dayPredictionRepository.delete(id);
    }
}

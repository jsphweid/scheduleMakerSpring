package com.joseph.service;

import com.joseph.model.WeekPrediction;
import com.joseph.repository.WeekPredictionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("weekPredictionService")
public class WeekPredictionServiceImpl implements WeekPredictionService {

    @Autowired
    private WeekPredictionRepository weekPredictionRepository;

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
}

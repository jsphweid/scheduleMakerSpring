package com.joseph.service;

import com.joseph.model.Schedule;
import com.joseph.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("scheduleService")
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Transactional
    public Schedule save(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }



    @Override
    public Schedule getScheduleById(int id) {
        return scheduleRepository.getScheduleById(id);
    }

    public List<Schedule> findAllSchedules() {
        return scheduleRepository.findAllSchedules();
    }
}

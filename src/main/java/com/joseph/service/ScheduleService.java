package com.joseph.service;

import com.joseph.model.Schedule;

import java.util.List;

public interface ScheduleService {
    Schedule save(Schedule schedule);

    Schedule getScheduleById(int id);

    List<Schedule> findAllSchedules();

    void delete(Schedule schedule);
}

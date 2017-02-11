package com.joseph.repository;

import com.joseph.model.Schedule;

import java.util.List;

public interface ScheduleRepository {
    Schedule save(Schedule schedule);

    Schedule getScheduleById(int id);

    List<Schedule> findAllSchedules();

    void delete(Schedule schedule);
}

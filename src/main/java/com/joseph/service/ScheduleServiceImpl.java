package com.joseph.service;

import com.joseph.model.Schedule;
import com.joseph.model.Shift;
import com.joseph.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("scheduleService")
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private ShiftService shiftService;

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

    @Transactional
    public void delete(Schedule schedule) {
        // delete all shifts on schedule

        List<Shift> associatedShifts = schedule.getShifts();
        associatedShifts.clear();
        schedule.setShifts(associatedShifts);
        scheduleRepository.save(schedule);
        shiftService.deleteShiftsHavingScheduleId(schedule.getId());
        scheduleRepository.delete(schedule);
    }
}

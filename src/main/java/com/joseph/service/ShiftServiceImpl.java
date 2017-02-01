package com.joseph.service;

import com.joseph.model.Shift;
import com.joseph.repository.ShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("shiftService")
public class ShiftServiceImpl implements ShiftService {

    @Autowired
    private ShiftRepository shiftRepository;

    @Transactional
    public Shift save(Shift shift) {
        return shiftRepository.save(shift);
    }

    public Shift getShift(int id) {
        return shiftRepository.getShiftById(id);
    }
}

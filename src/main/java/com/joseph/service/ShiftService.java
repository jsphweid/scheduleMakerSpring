package com.joseph.service;

import com.joseph.model.Shift;

import java.util.List;

public interface ShiftService {
    Shift save(Shift s1);

    List<Shift> getAllShifts();

    Shift getShift(int id);

    void deleteShiftsBelongingToEmp(int id);
}

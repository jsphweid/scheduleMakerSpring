package com.joseph.service;

import com.joseph.model.Shift;

import java.util.List;

public interface ShiftService {
    Shift save(Shift shift);

    List<Shift> getAllShifts();

    Shift getShift(int id);

    void deleteShiftsBelongingToEmp(int id);

    void delete(int id);
}

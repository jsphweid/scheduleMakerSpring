package com.joseph.repository;

import com.joseph.model.Shift;

public interface ShiftRepository {
    Shift save(Shift shift);

    Shift getShiftById(int id);
}

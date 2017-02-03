package com.joseph.repository;

import com.joseph.model.Shift;

import java.util.List;

public interface ShiftRepository {
    Shift save(Shift shift);

    Shift getShiftById(int id);

    List<Shift> getAll();
}

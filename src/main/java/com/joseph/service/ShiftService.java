package com.joseph.service;

import com.joseph.model.Shift;

public interface ShiftService {
    Shift save(Shift s1);

    Shift getShift(int id);
}

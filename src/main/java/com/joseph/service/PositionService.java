package com.joseph.service;

import com.joseph.model.Position;

import java.util.List;

public interface PositionService {
    List<Position> findAllPositions();

    Position save(Position position);

    Position getPosition(int id);

    Position update(Position position);

    void delete(int id);
}

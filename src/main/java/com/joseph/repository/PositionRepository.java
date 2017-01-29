package com.joseph.repository;

import com.joseph.model.Position;

import java.util.List;

public interface PositionRepository {
    List<Position> loadAll();

    Position save(Position position);

    Position getPositionById(int id);

    Position update(Position position);

    void delete(int id);
}

package com.joseph.service;

import com.joseph.model.Position;
import com.joseph.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("positionService")
public class PositionServiceImpl implements PositionService {

    @Autowired
    private PositionRepository positionRepository;

    public List<Position> findAllPositions() {
        return positionRepository.loadAll();
    }

    @Transactional
    public Position save(Position position) {
        return positionRepository.save(position);
    }

    @Transactional
    public Position getPosition(int id) {
        return positionRepository.getPositionById(id);
    }

    @Transactional
    public Position update(Position position) {
        return positionRepository.update(position);
    }

    @Transactional
    public void delete(int id) {
        positionRepository.delete(id);
    }
}

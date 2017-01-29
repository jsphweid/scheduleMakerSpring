package com.joseph.repository;

import com.joseph.model.Position;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository("positionRepository")
public class PositionRepositoryImpl implements PositionRepository {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private SessionService session;

    public List<Position> loadAll() {
        return em.createQuery(
                "SELECT p FROM Position p WHERE p.belongsTo = :owner order by p.title", Position.class)
                .setParameter("owner", session.getSessionUsername())
                .getResultList();
    }

    public Position save(Position position) {
        System.out.println("position title: " + position.getTitle());
        em.persist(position);
        em.flush();
        return position;
    }

    public Position getPositionById(int id) {
        return em.createQuery(
                "SELECT p FROM Position p WHERE p.id = :varid", Position.class)
                .setParameter("varid", id)
                .getSingleResult();
    }

    public Position update(Position position) {
        em.merge(position);
        return position;
    }

    public void delete(int id) {
        em.createQuery("DELETE FROM Position p WHERE p.id = :_id")
                .setParameter("_id", id)
                .executeUpdate();
    }
}

package com.joseph.repository;

import com.joseph.model.DayPrediction;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository("dayPredictionRepository")
public class DayPredictionRepositoryImpl implements DayPredictionRepository {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private SessionService session;

    public List<DayPrediction> loadAll() {
        return em.createQuery("SELECT d FROM DayPrediction d WHERE d.belongsTo = :owner order by d.title", DayPrediction.class)
                .setParameter("owner", session.getSessionUsername())
                .getResultList();
    }

    public DayPrediction save(DayPrediction dayPrediction) {
        em.persist(dayPrediction);
        em.flush();
        return dayPrediction;
    }

    public DayPrediction getDayPrediction(int id) {
        return em.createQuery("SELECT d FROM DayPrediction d WHERE d.id = :id", DayPrediction.class)
                .setParameter("id", id)
                .getSingleResult();
    }

    public DayPrediction update(DayPrediction dayPrediction) {
        em.merge(dayPrediction);
        return dayPrediction;
    }

    public void delete(int id) {
        em.createQuery("DELETE FROM DayPrediction d WHERE d.id = :id")
                .setParameter("id", id)
                .executeUpdate();
    }
}

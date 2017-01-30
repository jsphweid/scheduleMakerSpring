package com.joseph.repository;

import com.joseph.model.WeekPrediction;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository("weekPrediction")
public class WeekPredictionRepositoryImpl implements WeekPredictionRepository {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private SessionService session;


    public WeekPrediction save(WeekPrediction weekPrediction) {
        em.persist(weekPrediction);
        em.flush();
        return weekPrediction;
    }

    public List<WeekPrediction> findAll() {
        return em.createQuery("select w from WeekPrediction w where w.belongsTo = :owner", WeekPrediction.class)
                .setParameter("owner", session.getSessionUsername())
                .getResultList();
    }

    public WeekPrediction getById(int id) {
        return em.createQuery("select w from WeekPrediction w where w.id = :id", WeekPrediction.class)
                .setParameter("id", id)
                .getSingleResult();
    }
}

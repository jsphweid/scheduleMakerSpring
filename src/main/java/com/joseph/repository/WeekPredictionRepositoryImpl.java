package com.joseph.repository;

import com.joseph.model.DayPrediction;
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
        List<WeekPrediction> lst =  em.createQuery("select w from WeekPrediction w where w.id = :id", WeekPrediction.class)
                .setParameter("id", id)
                .getResultList();
        if (!lst.isEmpty()) {
            return lst.get(0);
        } else {
            WeekPrediction weekPrediction = new WeekPrediction();
            weekPrediction.setBelongsTo(session.getSessionUsername());
            return weekPrediction;
        }
    }

    public void delete(int id) {
        em.createQuery("delete from WeekPrediction w where w.id = :id")
                .setParameter("id", id)
                .executeUpdate();
    }

    public WeekPrediction update(WeekPrediction weekPrediction) {
        em.merge(weekPrediction);
        return weekPrediction;
    }
}

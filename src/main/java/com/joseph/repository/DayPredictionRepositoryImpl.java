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
        System.out.println(dayPrediction.getHour00());
        System.out.println(dayPrediction.getHour01());
        em.persist(dayPrediction);
        em.flush();
        return dayPrediction;
    }
}

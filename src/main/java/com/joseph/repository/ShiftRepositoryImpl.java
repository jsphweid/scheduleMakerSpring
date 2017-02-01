package com.joseph.repository;

import com.joseph.model.Shift;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository("shiftRepository")
public class ShiftRepositoryImpl implements ShiftRepository {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private SessionService session;

    public Shift save(Shift shift) {
        em.persist(shift);
        em.flush();
        return shift;
    }

    public Shift getShiftById(int id) {
        return em.createQuery("select s from Shift s where s.id = :id", Shift.class)
                .setParameter("id", id)
                .getSingleResult();

    }


}

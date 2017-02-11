package com.joseph.repository;

import com.joseph.model.Schedule;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository("scheduleRepository")
public class ScheduleRepositoryImpl implements ScheduleRepository {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private SessionService session;

    public Schedule save(Schedule schedule) {
        em.persist(schedule);
        em.flush();
        return schedule;
    }

    public Schedule getScheduleById(int id) {
        return em.createQuery("select s from Schedule s where s.id = :id", Schedule.class)
                .setParameter("id", id)
                .getSingleResult();
    }

    public List<Schedule> findAllSchedules() {
        return em.createQuery("select s from Schedule s where s.belongsTo = :owner", Schedule.class)
                .setParameter("owner", session.getSessionUsername())
                .getResultList();
    }

    public void delete(Schedule schedule) {
        em.createQuery("delete from Schedule s where s.id = :id")
                .setParameter("id", schedule.getId())
                .executeUpdate();
    }
}

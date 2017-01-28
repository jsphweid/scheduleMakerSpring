package com.joseph.repository;

import com.joseph.model.Employee;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository("employeeRepository")
public class EmployeeRepositoryImpl implements EmployeeRepository {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private SessionService session;

    public List<Employee> loadAll() {
        return em.createQuery(
            "SELECT e FROM Employee e WHERE e.belongsTo = :owner order by e.firstName, e.lastName", Employee.class)
            .setParameter("owner", session.getSessionUsername())
            .getResultList();
    }

    public Employee save(Employee employee) {
        em.persist(employee);
        em.flush();
        return employee;
    }

    public Employee update(Employee employee) {
        em.merge(employee);
        return employee;
    }

    public Employee getEmpById(int id) {
        return em.createQuery(
            "SELECT e FROM Employee e WHERE e.id = :varid", Employee.class)
            .setParameter("varid", id)
            .getSingleResult();
    }
}

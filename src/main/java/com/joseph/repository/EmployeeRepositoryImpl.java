package com.joseph.repository;

import com.joseph.model.Employee;
import com.joseph.model.Position;
import com.joseph.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Set;

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

    public void delete(int id) {
        em.createQuery("DELETE FROM Employee e WHERE e.id = :id")
                .setParameter("id", id)
                .executeUpdate();
    }

    public Employee getEmpById(int id) {
        return em.createQuery(
            "SELECT e FROM Employee e WHERE e.id = :varid", Employee.class)
            .setParameter("varid", id)
            .getSingleResult();
    }
}

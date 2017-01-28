package com.joseph.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="employee")
@NamedQueries({
        @NamedQuery(name=Employee.FIND_ALL_EMPLOYEES, query="SELECT e FROM Employee e order by e.firstName, e.lastName")
})
public class Employee {

    public static final String FIND_ALL_EMPLOYEES = "findAllEmployees";

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private float hourlyWage;

    @NotNull
    private float score;

    private float minHours;

    private float maxHours;

    @NotNull
    private String belongsTo;

    public static String getFindAllEmployees() {
        return FIND_ALL_EMPLOYEES;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public float getHourlyWage() {
        return hourlyWage;
    }

    public void setHourlyWage(float hourlyWage) {
        this.hourlyWage = hourlyWage;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    public float getMinHours() {
        return minHours;
    }

    public void setMinHours(float minHours) {
        this.minHours = minHours;
    }

    public float getMaxHours() {
        return maxHours;
    }

    public void setMaxHours(float maxHours) {
        this.maxHours = maxHours;
    }

    public String getBelongsTo() {
        return belongsTo;
    }

    public void setBelongsTo(String belongsTo) {
        this.belongsTo = belongsTo;
    }

}

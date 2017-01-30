package com.joseph.model;

import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="employee")
public class Employee {

    @Id
    @GeneratedValue
    private int id;

    @NotEmpty
    private String firstName;

    @NotEmpty
    private String lastName;

    @NotNull
    private float hourlyWage;

    @Range(min = 10, max = 30)
    private float score;

    @Range(min = 0, max = 168)
    private float minHours;

    @Range(min = 0, max = 168)
    private float maxHours;

    @NotNull
    private String belongsTo;

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

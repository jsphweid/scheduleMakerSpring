package com.joseph.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="employee")
public class Employee {

    @Id
    @GeneratedValue
    @Column(name="employee_id")
    private int id;

    public List<Shift> getShifts() {
        return shifts;
    }

    public void setShifts(List<Shift> shifts) {
        this.shifts = shifts;
    }

//    @JsonIgnore
    @OneToMany(mappedBy="employee", cascade = CascadeType.ALL)
    private List<Shift> shifts;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name="employee_position",
            joinColumns = @JoinColumn(name = "employee_id", referencedColumnName = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "position_id", referencedColumnName = "position_id"))
    private Set<Position> positions;

    public Set<Position> getPositions() {
        return positions;
    }

    public void setPositions(Set<Position> positions) {
        this.positions = positions;
    }

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

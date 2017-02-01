package com.joseph.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "shift")
public class Shift {

    @Id
    @GeneratedValue
    @Column(name="shift_id")
    private int id;

    @NotNull
    private int startHour;
    @NotNull
    private int endHour;
    @NotNull
    private int startMinutes;
    @NotNull
    private int endMinutes;

    @NotNull
    private String belongsTo;

    public String getBelongsTo() {
        return belongsTo;
    }

    public void setBelongsTo(String belongsTo) {
        this.belongsTo = belongsTo;
    }

    public int getStartHour() {
        return startHour;
    }

    public void setStartHour(int startHour) {
        this.startHour = startHour;
    }

    public int getEndHour() {
        return endHour;
    }

    public void setEndHour(int endHour) {
        this.endHour = endHour;
    }

    public int getStartMinutes() {
        return startMinutes;
    }

    public void setStartMinutes(int startMinutes) {
        this.startMinutes = startMinutes;
    }

    public int getEndMinutes() {
        return endMinutes;
    }

    public void setEndMinutes(int endMinutes) {
        this.endMinutes = endMinutes;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
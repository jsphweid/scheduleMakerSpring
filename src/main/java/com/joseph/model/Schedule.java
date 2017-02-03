package com.joseph.model;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name="schedule")
public class Schedule {

    @Id
    @GeneratedValue
    @Column(name="schedule_id")
    private int id;

    @NotBlank
    private String title;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "weekPrediction_id")
    private WeekPrediction weekPrediction;

    public int getId() {
        return id;
    }

    @NotNull
    private String belongsTo;

    public String getBelongsTo() {
        return belongsTo;
    }

    public void setBelongsTo(String belongsTo) {
        this.belongsTo = belongsTo;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public WeekPrediction getWeekPrediction() {
        return weekPrediction;
    }

    public void setWeekPrediction(WeekPrediction weekPrediction) {
        this.weekPrediction = weekPrediction;
    }

    public List<Shift> getShifts() {
        return shifts;
    }

    public void setShifts(List<Shift> shifts) {
        this.shifts = shifts;
    }

    @OneToMany(mappedBy="schedule")
    private List<Shift> shifts;
}

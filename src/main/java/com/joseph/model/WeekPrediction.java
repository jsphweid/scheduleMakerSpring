package com.joseph.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "weekPrediction")
public class WeekPrediction {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBelongsTo() {
        return belongsTo;
    }

    public void setBelongsTo(String belongsTo) {
        this.belongsTo = belongsTo;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String belongsTo;

    @NotEmpty
    private String title;

    public DayPrediction getDay0() {
        return day0;
    }

    public void setDay0(DayPrediction day0) {
        this.day0 = day0;
    }

    public DayPrediction getDay1() {
        return day1;
    }

    public void setDay1(DayPrediction day1) {
        this.day1 = day1;
    }

    public DayPrediction getDay2() {
        return day2;
    }

    public void setDay2(DayPrediction day2) {
        this.day2 = day2;
    }

    public DayPrediction getDay3() {
        return day3;
    }

    public void setDay3(DayPrediction day3) {
        this.day3 = day3;
    }

    public DayPrediction getDay4() {
        return day4;
    }

    public void setDay4(DayPrediction day4) {
        this.day4 = day4;
    }

    public DayPrediction getDay5() {
        return day5;
    }

    public void setDay5(DayPrediction day5) {
        this.day5 = day5;
    }

    public DayPrediction getDay6() {
        return day6;
    }

    public void setDay6(DayPrediction day6) {
        this.day6 = day6;
    }

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "day0Id")
    private DayPrediction day0;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "day1Id")
    private DayPrediction day1;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "day2Id")
    private DayPrediction day2;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "day3Id")
    private DayPrediction day3;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "day4Id")
    private DayPrediction day4;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "day5Id")
    private DayPrediction day5;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "day6Id")
    private DayPrediction day6;
}

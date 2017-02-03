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

    public int getDay0Id() {
        return day0Id;
    }

    public void setDay0Id(int day0Id) {
        this.day0Id = day0Id;
    }

    public int getDay1Id() {
        return day1Id;
    }

    public void setDay1Id(int day1Id) {
        this.day1Id = day1Id;
    }

    public int getDay2Id() {
        return day2Id;
    }

    public void setDay2Id(int day2Id) {
        this.day2Id = day2Id;
    }

    public int getDay3Id() {
        return day3Id;
    }

    public void setDay3Id(int day3Id) {
        this.day3Id = day3Id;
    }

    public int getDay4Id() {
        return day4Id;
    }

    public void setDay4Id(int day4Id) {
        this.day4Id = day4Id;
    }

    public int getDay5Id() {
        return day5Id;
    }

    public void setDay5Id(int day5Id) {
        this.day5Id = day5Id;
    }

    public int getDay6Id() {
        return day6Id;
    }

    public void setDay6Id(int day6Id) {
        this.day6Id = day6Id;
    }

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String belongsTo;

    @NotEmpty
    private String title;

    private int day0Id;

    private int day1Id;

    private int day2Id;

    private int day3Id;

    private int day4Id;

    private int day5Id;

    private int day6Id;
}

package com.joseph.model;

import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotNull;

public class Employee {

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


    @Range(min = 1, max = 120)
    private int minutes;

    private String activity;
}

package com.example.Sellions.domen;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Set;

@Entity
@Table(name = "tv_table")
public class Tv extends Parameters {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String model;
    private String brand;
    private String display_technology;
    private String color;
    private String screen_size;
    private String refresh_rate;
    private String weight;
    private String condition;
    private String inputs;

    public Tv(){}

    public Tv(String ...args) {
        this.model = getModel();
        this.brand = getBrand();
        this.display_technology = getDisplay_technology();
        this.color = getColor();
        this.screen_size = getScreen_size();
        this.refresh_rate = getRefresh_rate();
        this.weight = getWeight();
        this.condition = getCondition();
        this.inputs = getInputs();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    @Override
    public void setBrand(String brand) {
        this.brand = brand;
    }

    @Override
    public void setModel(String model) {
        this.model = model;
    }

    @Override
    public String getBrand() {
        return brand;
    }

    @Override
    public String getModel() {
        return model;
    }

    @Override
    public String getDisplay_technology() {
        return display_technology;
    }

    @Override
    public void setDisplay_technology(String display_technology) {
        this.display_technology = display_technology;
    }

    @Override
    public String getColor() {
        return color;
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String getScreen_size() {
        return screen_size;
    }

    @Override
    public void setScreen_size(String screen_size) {
        this.screen_size = screen_size;
    }

    @Override
    public String getRefresh_rate() {
        return refresh_rate;
    }

    @Override
    public void setRefresh_rate(String refresh_rate) {
        this.refresh_rate = refresh_rate;
    }

    @Override
    public String getWeight() {
        return weight;
    }

    @Override
    public void setWeight(String weight) {
        this.weight = weight;
    }

    @Override
    public String getCondition() {
        return condition;
    }

    @Override
    public void setCondition(String condition) {
       this.condition = condition;
    }

    @Override
    public String getInputs() {
        return inputs;
    }

    @Override
    public void setInputs(String inputs) {
        this.inputs = inputs;
    }
}

package com.example.Sellions.domen;

public abstract class Parameters {

    private String model;
    private String brand;
    private String display_technology;
    private String color;
    private String screen_size;
    private String refresh_rate;
    private String weight;
    private String condition;
    private String inputs;

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDisplay_technology() {
        return display_technology;
    }

    public void setDisplay_technology(String display_technology) {
        this.display_technology = display_technology;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getScreen_size() {
        return screen_size;
    }

    public void setScreen_size(String screen_size) {
        this.screen_size = screen_size;
    }

    public String getRefresh_rate() {
        return refresh_rate;
    }

    public void setRefresh_rate(String refresh_rate) {
        this.refresh_rate = refresh_rate;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getInputs() {
        return inputs;
    }

    public void setInputs(String inputs) {
        this.inputs = inputs;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
package com.neu.cs5200.buycar.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@Entity
@Table(name = "carModel")
public class CarModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String VIN;
    private int year;
    private String name;
    private String color;
    private Customer.CarType type;

    @ManyToOne
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Maker maker;

    @ManyToMany(mappedBy = "carModels")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Salesman> salesmen;

    public CarModel() { }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVIN() {
        return VIN;
    }

    public void setVIN(String VIN) {
        this.VIN = VIN;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Customer.CarType getType() {
        return type;
    }

    public void setType(Customer.CarType type) {
        this.type = type;
    }

    public Maker getMaker() {
        return maker;
    }

    public void setMaker(Maker maker) {
        this.maker = maker;
    }

    public List<Salesman> getSalesmen() {
        return salesmen;
    }

    public void setSalesmen(List<Salesman> salesmen) {
        this.salesmen = salesmen;
    }
}

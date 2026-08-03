package com.company.mrp.entity;

import jakarta.persistence.*;

@Entity
@Table(name="settings")
public class Settings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String gstNumber;
    private String phone;
    private String email;
    private String address;
    private String theme;

    public Settings(){}

    public Long getId(){ return id; }
    public void setId(Long id){ this.id=id; }

    public String getCompanyName(){ return companyName; }
    public void setCompanyName(String companyName){ this.companyName=companyName; }

    public String getGstNumber(){ return gstNumber; }
    public void setGstNumber(String gstNumber){ this.gstNumber=gstNumber; }

    public String getPhone(){ return phone; }
    public void setPhone(String phone){ this.phone=phone; }

    public String getEmail(){ return email; }
    public void setEmail(String email){ this.email=email; }

    public String getAddress(){ return address; }
    public void setAddress(String address){ this.address=address; }

    public String getTheme(){ return theme; }
    public void setTheme(String theme){ this.theme=theme; }
}
package com.neu.cs5200.buycar.model;

import javax.persistence.Entity;

@Entity
public class Admin extends User{
	public Admin() { }

    public Admin(String username, String password, String email, String name, String phone) {
        super(username, password, email, name, true, phone, User.Role.Admin);
    }

}

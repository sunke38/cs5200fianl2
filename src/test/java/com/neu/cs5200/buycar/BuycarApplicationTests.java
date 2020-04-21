package com.neu.cs5200.buycar;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.neu.cs5200.buycar.model.*;
import com.neu.cs5200.buycar.repository.*;



@SpringBootTest
class BuycarApplicationTests {

	@Autowired AdminRepository admindao;
	@Autowired CustomerRepository customerdao;
	@Autowired SalesmanRepository salesmandao;
	@Autowired MessageRepository messageDao;
	@Test
	void contextLoads() {
		/*
		Admin admin = new Admin("admin", "admin", "admin@gmail.com", "admin", "888-888-8888");
		Customer alice = new Customer("alice", "alice", "alice@gmail.com", "alice", "888-888-2222",15000, Customer.CarType.Sadam);
		Salesman bob = new Salesman("bob", "bob", "bob@gmail.com", "bob", "888-888-1111",1990);
		Salesman dan = new Salesman("dan", "dan", "dan@gmail.com", "dan", "888-888-3333",1990);
		admindao.save(admin);
		customerdao.save(alice);
		salesmandao.save(bob);
		salesmandao.save(dan);
		
		Message l1= new Message();
		l1.setCustomer(customerdao.findCustomerByUsername("alice").get(0));
		l1.setSalesman(salesmandao.findSalesmanByUsername("bob").get(0));
		l1.setText("Hello bob");
		messageDao.save(l1);
		*/
	}

}

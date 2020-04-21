package com.neu.cs5200.buycar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BuycarApplication extends SpringBootServletInitializer{
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
        return application.sources(BuycarApplication.class);
    }
	public static void main(String[] args) {
		SpringApplication.run(BuycarApplication.class, args);
	}

}

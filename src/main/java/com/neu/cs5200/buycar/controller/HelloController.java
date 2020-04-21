package com.neu.cs5200.buycar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloController {
	@RequestMapping(value="/hello",method=RequestMethod.GET)
	public String helloword() {
		return "helloword";
	}
}
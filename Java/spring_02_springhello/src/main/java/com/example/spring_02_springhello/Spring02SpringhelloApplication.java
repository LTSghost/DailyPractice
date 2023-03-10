package com.example.spring_02_springhello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Spring02SpringhelloApplication {

	public static void main(String[] args) {
		ApplicationContext apc = SpringApplication.run(Spring02SpringhelloApplication.class, args);
		int i = 0;
		for (String s: apc.getBeanDefinitionNames()) {
			i++;
			System.out.println(i + " " + s);
		}
	}

}

package com.demo.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;



@SpringBootApplication(scanBasePackages = "com.demo.spring")
@EnableJpaAuditing
public class MyDemoSpringProjectApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyDemoSpringProjectApplication.class, args);
    }
}

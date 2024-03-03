package com.example.helloservice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloServiceApplication {

    @Value("${demo.prop:default-value-1}")
    private String name;

    public static void main(String[] args) {
        SpringApplication.run(HelloServiceApplication.class, args);
    }

    @GetMapping("/hello")
    public String test(){
        return "hello" + this.name;
    }

}

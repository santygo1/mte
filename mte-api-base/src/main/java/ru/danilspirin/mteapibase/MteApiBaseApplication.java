package ru.danilspirin.mteapibase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class MteApiBaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(MteApiBaseApplication.class, args);
    }

}

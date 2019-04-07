package com.jordiburgos.nubol;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.jordiburgos.nubol.storage.StorageProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class NubolApplication {

	public static void main(String[] args) {
		SpringApplication.run(NubolApplication.class, args);
	}

}

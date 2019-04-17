package com.zime.hduspider;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value = "com.zime.hduspider.dao")
public class HduspiderApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(HduspiderApplication.class, args);
    }
}


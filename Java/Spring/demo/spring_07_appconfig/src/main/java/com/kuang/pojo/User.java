package com.kuang.pojo;

import org.springframework.beans.factory.annotation.Value;

public class User {
    private String name;


    public String getName() {
        return this.name;
    }

    @Value("LTS") // 屬性注入
    public void setName(String name) {
        this.name = name;
    }
    

    @Override
    public String toString() {
        return "{" +
            " name='" + getName() + "'" +
            "}";
    }
    
}

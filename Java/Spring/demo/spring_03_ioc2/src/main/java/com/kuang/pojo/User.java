package com.kuang.pojo;

public class User {
    private String name;

    // !! Failed to instantiate [com.kuang.pojo.User]: No default constructor found 
    public User(String name) {
        this.name = name;
    }

    // non paramater
    // public User() {
    //     System.out.println("User's Constructor!");
    // }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void show() {
        System.out.println("name = " + name);
    }
}

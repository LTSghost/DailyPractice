package com.kuang.pojo;

public class UserTest {
    private String name;

    public UserTest() {
        System.out.println("UserTest Class was created");
    }
    
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

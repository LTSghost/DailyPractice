package com.kuang.service;

public class UserServiceImpl implements UserService{

    @Override
    public void add() {
        System.out.println("add a account");
    }

    @Override
    public void query() {
        System.out.println("query account");
    }

    @Override
    public void update() {
        System.out.println("update a account");
    }

    @Override
    public void delete() {
        System.out.println("delete a account");
    }
    
}

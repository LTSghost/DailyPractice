package com.kuang.demo02;

public class UserServiceProxy implements UserService {
    private UserServiceImpl userService;

    public void setUserService(UserServiceImpl userService) {
        this.userService = userService;
    }

    public void query(){
        log("query");
        userService.query();
    }
    public void add(){
        userService.add();
    }
    public void delete(){
        userService.delete();
    }
    public void update(){
        userService.update();
    }

    public void log(String msg) {
        System.out.println("使用了" + msg + "方法");
    }
}

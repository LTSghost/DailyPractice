package com.kuang.demo04;

import com.kuang.demo02.UserService;
import com.kuang.demo02.UserServiceImpl;
import com.kuang.demo02.UserServiceImplTwo;

public class Client {

    public static void main(String[] args) {
            // 真實角色
    UserServiceImplTwo userService = new UserServiceImplTwo();
    // 代理角色 不存在
    ProxyInvocationHandler pih = new ProxyInvocationHandler(); 
    pih.setTarget(userService); 
    UserService proxy = (UserService) pih.getProxy();

    proxy.add();
    }

}

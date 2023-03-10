package com.kuang.pojo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

// 等價於 <bean id="user" class="com.kuang.pojo.User"></bean>
@Component
@Scope("singleton")
public class User {

    public String name;

    // 相當於 <property name="name" value="LTS">
    @Value("LTS")
    public void setName(String name) {
        this.name = name;
    }
}

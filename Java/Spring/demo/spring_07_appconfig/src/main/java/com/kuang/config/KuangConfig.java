package com.kuang.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import com.kuang.pojo.User;

// 這個也會 Spring 容器託管, 註冊到容器中, 因為他本來就是一個 @Component
// @Configuration 代表這是一個配置類, 就和我們之前看的beans.xml
@Configuration
@ComponentScan("com.kuang.pojo")
@Import(KuangConfig2.class)
public class KuangConfig {

    // 註冊一個Bean就相當我們之前寫的一個Bean標籤
    // 這個方法的名字, 就相當於bean標籤中的 id 屬性
    // 這個方法的回傳值, 就相當於bean標籤中的 class屬性
    @Bean
    public User user() {
        return new User(); //就是返回要注入到bean的對象
    }
}

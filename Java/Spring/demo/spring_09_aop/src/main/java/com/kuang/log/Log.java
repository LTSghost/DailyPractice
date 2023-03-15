package com.kuang.log;

import java.lang.reflect.Method;

import org.springframework.aop.MethodBeforeAdvice;

public class Log implements MethodBeforeAdvice {

    // @Override
    // public void before(Method arg0, Object[] arg1, Object arg2) throws Throwable {
        
    // }

    /*
     * method: 要執行的目標對象的方法
     * args: 參數
     * target: 目標
     */
    @Override
    public void before(Method method, Object[] args, Object target) throws Throwable {
        System.out.println(target.getClass().getName() + "的" + method.getName() + "被執行了");
    }
    
}

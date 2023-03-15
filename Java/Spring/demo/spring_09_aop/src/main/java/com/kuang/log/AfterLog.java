package com.kuang.log;

import java.lang.reflect.Method;

import org.springframework.aop.AfterReturningAdvice;

public class AfterLog implements AfterReturningAdvice{

    @Override //returnValue;返回值
    public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
        System.out.println("執行了" + method.getName() + "方法, 返回結果為" + returnValue);
    }
}

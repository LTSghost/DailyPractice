package com.kuang.diy;



import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

// 使用註解方式實現AOP
@Aspect
public class AnnotationPointCut {

    @Before("execution(* com.kuang.service.UserServiceImpl.*(..))")
    public void before(){
        System.out.println("===執行前===");
    }

    @After("execution(* com.kuang.service.UserServiceImpl.*(..))")
    public void after(){
        System.out.println("===執行後===");
    }

    // 在環繞增強中, 我們可以給定一個參數, 代表我們要獲取處理切入的點
    @Around(value = "execution(* com.kuang.service.UserServiceImpl.*(..))")
    public void around(ProceedingJoinPoint jp) throws Throwable{
        System.out.println("環繞前");

        Signature signature = jp.getSignature();
        System.out.println("signature:" + signature);

        //執行方法
        Object proceed = jp.proceed();

        System.out.println("環繞後");

        System.out.println(proceed);
    }

}

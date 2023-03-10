package com.kuang.demo03;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

// 使用這個 class 來自動生成代理
public class ProxyInvocationHandler implements InvocationHandler{

    // InvocationHandler handler = new MyInvocationHandler(...);
    //  Foo f = (Foo) Proxy.newProxyInstance(Foo.class.getClassLoader(),
    //                                       new Class<?>[] { Foo.class },
    //                                       handler);


    private Rent rent;

    public void setRent(Rent rent) {
        this.rent = rent;
    }

    public Object getProxy(){
       return Proxy.newProxyInstance(this.getClass().getClassLoader(), rent.getClass().getInterfaces(), this);
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        bringSeeHoust();
        Object result = method.invoke(rent, args);
        contract();
        fare();
        
        return result;
    }
    

    public void bringSeeHoust() {
        System.out.println("proxy bring you see house");
    }
    public void contract() {
        System.out.println("sign contract");
    }
    public void fare() {
        System.out.println("收仲介費");
    }
}

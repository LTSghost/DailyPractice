package com.kuang.demo04;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

// 使用這個 class 來自動生成代理
public class ProxyInvocationHandler implements InvocationHandler{

    // InvocationHandler handler = new MyInvocationHandler(...);
    //  Foo f = (Foo) Proxy.newProxyInstance(Foo.class.getClassLoader(),
    //                                       new Class<?>[] { Foo.class },
    //                                       handler);


    private Object target;

    public void setTarget(Object target) {
        this.target = target;
    }

    public Object getProxy(){
       return Proxy.newProxyInstance(this.getClass().getClassLoader(), target.getClass().getInterfaces(), this);
    }

    // invoke 處理代理實例, 並返回結果
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        log(method.getName());
        Object result = method.invoke(target, args);
        return result;
    }

    public void log(String msg) {
        System.out.println("執行了" + msg + "方法");
    }
    


}

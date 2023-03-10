package com.kuang.demo03;

public class Client {
    public static void main(String[] args) {
        Host host = new Host();

        ProxyInvocationHandler pih = new ProxyInvocationHandler();
        pih.setRent(host);

        Rent proxy = (Rent) pih.getProxy(); // 這裡的Proxy就是自動生成, 我們並沒有寫

        proxy.rent();
    }
}

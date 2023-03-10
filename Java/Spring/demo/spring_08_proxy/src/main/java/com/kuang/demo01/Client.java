package com.kuang.demo01;

public class Client {
    public static void main(String[] args) {

        // Host host = new Host();
        // host.rent();

        Host host = new Host();
        Proxy proxy = new Proxy(host);

        // 不用面對房東, 直接找仲介租房即可!
        proxy.rent();
    }
}

package com.kuang.demo01;

public class Proxy implements Rent{
    
    private Host host;

    public Proxy() {
    }
    public Proxy(Host host) {
        this.host = host;
    }

    public void rent() {
        bringSeeHoust();
        host.rent();
        contract();
        fare();
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

package com.kuang.pojo;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Student {
    
    private String name;
    private Address address;
    private String[] books;
    private List<String> hobbys;
    private Map<String,String> card;
    private Set<String> games;
    private String wife;
    private Properties info;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return this.address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String[] getBooks() {
        return this.books;
    }

    public void setBooks(String[] books) {
        this.books = books;
    }

    public List<String> getHobbys() {
        return this.hobbys;
    }

    public void setHobbys(List<String> hobbys) {
        this.hobbys = hobbys;
    }

    public Map<String,String> getCard() {
        return this.card;
    }

    public void setCard(Map<String,String> card) {
        this.card = card;
    }

    public Set<String> getGames() {
        return this.games;
    }

    public void setGames(Set<String> games) {
        this.games = games;
    }

    public String getWife() {
        return this.wife;
    }

    public void setWife(String wife) {
        this.wife = wife;
    }

    public Properties getInfo() {
        return this.info;
    }

    public void setInfo(Properties info) {
        this.info = info;
    }

    @Override
    public String toString() {
        return "{" +
            " \n name='" + getName() + "'" +
            ",\n address='" + getAddress().toString() + "'" +
            ",\n books='" + Arrays.toString(books) + "'" +
            ",\n hobbys='" + getHobbys() + "'" +
            ",\n card='" + getCard() + "'" +
            ",\n games='" + getGames() + "'" +
            ",\n wife='" + getWife() + "'" +
            ",\n info='" + getInfo() + "'" +
            "\n}";
    }


}

package com.kuang.pojo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import jakarta.annotation.Nullable;
import jakarta.annotation.Resource;

public class People {

    @Resource(name = "cat1")
    private Cat cat;

    @Resource(name = "dog1")
    private Dog dog;

    private String name;

    public People(@Nullable String name) {
        this.name = name;
    }

    public Cat getCat() {
        return this.cat;
    }

    public void setCat(Cat cat) {
        this.cat = cat;
    }

    public Dog getDog() {
        return this.dog;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "{" +
            " cat='" + getCat() + "'" +
            ", dog='" + getDog() + "'" +
            ", name='" + getName() + "'" +
            "}";
    }

}

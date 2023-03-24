package com.syscom.lingan.entity;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    private int id;
    private String name;
    private int age;
    private String email;
    private Date createTime;
    private Date updateTime;

}

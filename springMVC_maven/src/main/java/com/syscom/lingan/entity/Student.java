package com.syscom.lingan.entity;

import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Student implements Serializable {
    private int id;
    private String name;
    private int age;
    private String email;
    private Date createTime;
    private Date updateTime;

}

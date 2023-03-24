package com.syscom.lingan.domain;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    private String id;
    private String name;
    private String password;
}

package net.java.test.springbootsearchrestapi.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "sysrole")
public class SysRole {

    @Id
    @Column(length = 50)
    private String ROLE_ID;
    @Column(length = 100)
    private String ROLE_NAME;
    @Column(length = 50)
    private String CREATOR;
    @CreationTimestamp
    private LocalDateTime CREATE_TIME;
    @Column(length = 50)
    private String UPDATER;
    @UpdateTimestamp
    private LocalDateTime UPDATE_TIME;
}

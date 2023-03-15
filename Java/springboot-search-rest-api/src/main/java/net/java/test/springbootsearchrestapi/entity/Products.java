package net.java.test.springbootsearchrestapi.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonProperty;

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
@Table(name = "product")
public class Products {
    
    @Id
    @Column(length = 50)
    @JsonProperty("ITEM_NO")
    private String ITEM_NO;

    @Column(length = 100)
    @JsonProperty("ITEM_NAME")
    private String ITEM_NAME;

    @Column(precision=10, scale=0)
    @JsonProperty("PRICE")
    private int PRICE;

    // @Column(columnDefinition = "DATE")
    @JsonProperty("EFF_DATE_FROM")
    private LocalDate EFF_DATE_FROM;

    @JsonProperty("EFF_DATE_TO")
    private LocalDate EFF_DATE_TO;

    @Column(length = 20)
    @JsonProperty("TAX")
    private String TAX;

    @Column(length = 50)
    @JsonProperty("CREATOR")
    private String CREATOR;

    @CreationTimestamp
    @JsonProperty("CREATE_TIME")
    private LocalDateTime CREATE_TIME;

    @Column(length = 50)
    @JsonProperty("UPDATER")
    private String UPDATER;

    @UpdateTimestamp
    @JsonProperty("UPDATE_TIME")
    private LocalDateTime UPDATE_TIME;

    // `ITEM_NO` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品代号',
    // `ITEM_NAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品名称',
    // `PRICE` decimal(10, 0) NULL DEFAULT NULL COMMENT '价格',
    // `EFF_DATE_FROM` date NULL DEFAULT NULL COMMENT '适用开始日',
    // `EFF_DATE_TO` date NULL DEFAULT NULL COMMENT '适用结束日',
    // `TAX` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '税别',
    // `CREATOR` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人员',
    // `CREATE_TIME` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
    // `UPDATER` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '修改人员',
    // `UPDATE_TIME` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
    // PRIMARY KEY (`ITEM_NO`) USING BTREE
}

package net.java.test.springbootsearchrestapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import net.java.test.springbootsearchrestapi.entity.Products;

public interface ProductsRepository extends JpaRepository<Products, String> {

    @Query(value = "SELECT * FROM product", nativeQuery = true)
    List<Products> readProducts();
    
}

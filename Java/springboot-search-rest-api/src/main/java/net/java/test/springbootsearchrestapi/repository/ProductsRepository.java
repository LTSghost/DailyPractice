package net.java.test.springbootsearchrestapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import net.java.test.springbootsearchrestapi.entity.Products;

public interface ProductsRepository extends JpaRepository<Products, String> {

    @Query(value = "SELECT * FROM product", nativeQuery = true)
    List<Products> readProducts();

    @Query(value = "SELECT ITEM_NO FROM Product p where p.ITEM_NO like %:ITEM_NO%")
    List<Products> readProductsById(@Param("ITEM_NO") String ITEM_NO);

    // @Query(value = "select name,author,price from Book b where b.name like %:name%")
    // List<Book> findByNameMatch(@Param("name") String name);
    
}

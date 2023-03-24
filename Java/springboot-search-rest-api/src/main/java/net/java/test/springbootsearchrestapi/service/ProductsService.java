package net.java.test.springbootsearchrestapi.service;

import java.util.List;

import net.java.test.springbootsearchrestapi.entity.Products;

public interface ProductsService {
    List<Products> readProducts();

    List<Products> readProductsById(String id);
}

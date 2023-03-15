package net.java.test.springbootsearchrestapi.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import net.java.test.springbootsearchrestapi.entity.Products;
import net.java.test.springbootsearchrestapi.repository.ProductRepository;
import net.java.test.springbootsearchrestapi.repository.ProductsRepository;
import net.java.test.springbootsearchrestapi.service.ProductsService;

@Service
public class ProductsServiceImpl implements ProductsService{

    private ProductsRepository productsRepository;

    public ProductsServiceImpl(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    @Override
    public List<Products> readProducts() {
        List<Products> productsList = productsRepository.readProducts();
        return productsList;
    }

    @Override
    public List<Products> readProductsById() {
        List<Products> productsList = productsRepository.readProducts();
        return productsList;
    }
}

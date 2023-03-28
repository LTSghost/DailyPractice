package net.java.test.springbootsearchrestapi.service.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import net.java.test.springbootsearchrestapi.entity.Products;
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
    public List<Products> readProductsById(String id) {
        List<Products> productsList = productsRepository.readProductsById(id);
        return productsList;
    }

    @Override
    public Map<String, String> updateProductsById(String id, Products products) {
        Map<String, String> newMap = new HashMap<>();

        Products newProduct = productsRepository.findById(id).get();
        System.out.println("Find By Id newProduct" + newProduct.getPrice());

        System.out.println(products.getItemName() + ", " + products.getPrice() + ", " + products.getEffDateFrom() + ", " +
                           products.getEffDateTo() + ", " + products.getTax() + ", " + products.getUpdater());

        newProduct.setItemName(products.getItemName());
        newProduct.setPrice(products.getPrice());
        newProduct.setEffDateFrom(products.getEffDateFrom());
        newProduct.setEffDateTo(products.getEffDateTo());
        newProduct.setTax(products.getTax());
        newProduct.setUpdater(products.getUpdater());

        productsRepository.save(newProduct);

        newMap.put("Status", "Y");
        newMap.put("Message", "修改成功");

        return newMap;
    }

    @Override
    public Map<String, String> deleteProductsById(String id) {
        Map<String, String> newMap = new HashMap<>();

        for (Products element :this.readProducts()){
            if ( id.equals(element.getItemNo()) ) {
                productsRepository.deleteById(id);
                System.out.println("delete " + id);
                break;
            }
        }

        newMap.put("Status", "Y");
        newMap.put("Message", "刪除成功");

        return newMap;
    }

    @Override
    public Map<String, String> createProducts(Products products) {
        Map<String, String> newMap = new HashMap<>();

        productsRepository.save(products);

        newMap.put("Status", "Y");
        newMap.put("Message", "新增成功");

        return newMap;
    }

    @Override
    public List<Map<String, String>> postReadProducts2(Products products) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'postReadProducts2'");
    }

    @Override
    public List<Map<String, String>> customFindAll(String products) {
        productsRepository.customFindAll(); // All joinQueryData
        return null;
    }


}

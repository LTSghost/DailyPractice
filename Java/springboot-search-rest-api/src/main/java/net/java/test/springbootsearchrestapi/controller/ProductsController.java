package net.java.test.springbootsearchrestapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import jakarta.annotation.Resource;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import net.java.test.springbootsearchrestapi.entity.Products;
import net.java.test.springbootsearchrestapi.service.ProductsService;

@Slf4j
@RestController
@RequestMapping("api/v1/products")
@CrossOrigin(origins = "*")
public class ProductsController {
    
    @Resource
    private ProductsService productsService;

    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @RequestMapping
    public ResponseEntity<List<Products>> readProducts(){
        System.out.println("Get===============Products");
        return ResponseEntity.ok(productsService.readProducts());
    }

    @SneakyThrows
    @RequestMapping("/test")
    public String testReadProducts(){
        log.info("Get====ProductsController.testReadProducts");

        String resultStr = "[";

        List<Products> productsList = productsService.readProducts();

        for(Products element :productsList){
            ObjectMapper mapper = new ObjectMapper();
            
            mapper.registerModule(new JavaTimeModule());
            String str = mapper.writeValueAsString(element);
            resultStr += str + ",";
        }
        return resultStr + "]";
    }

    @RequestMapping("/id")
    public ResponseEntity<List<Products>> readProductsByID(String id){
        System.out.println("Get===============Products");
        return ResponseEntity.ok(productsService.readProductsById(id));
    }


}

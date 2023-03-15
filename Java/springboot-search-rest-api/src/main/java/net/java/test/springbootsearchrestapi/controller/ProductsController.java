package net.java.test.springbootsearchrestapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.Resource;
import net.java.test.springbootsearchrestapi.entity.Products;
import net.java.test.springbootsearchrestapi.service.ProductsService;

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

    @RequestMapping("/id")
    public ResponseEntity<List<Products>> readProductsByID(){
        System.out.println("Get===============Products");
        return ResponseEntity.ok(productsService.readProducts());
    }


}

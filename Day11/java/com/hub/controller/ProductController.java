package com.hub.controller;




import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hub.entity.Product;
import com.hub.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
 private final ProductService productService;

 public ProductController(ProductService productService) {
     this.productService = productService;
 }

 @GetMapping("/getting")
 public List<Product> getAllProducts() {
     return productService.getAllProducts();
 }

 @GetMapping("/{id}")
 public ResponseEntity<Product> getProductById(@PathVariable Long id) {
     Optional<Product> product = productService.getProductById(id);
     return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
 }

 @PostMapping("/posting")
 public ResponseEntity<Product> createProduct(@RequestBody Product product) {
     Product createdProduct = productService.createProduct(product);
     return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
 }

 @PutMapping("/{id}")
 public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
     Product product = productService.updateProduct(id, updatedProduct);
     return product != null ? ResponseEntity.ok(product) : ResponseEntity.notFound().build();
 }

 @DeleteMapping("/{id}")
 public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
     boolean deleted = productService.deleteProduct(id);
     return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
 }
}

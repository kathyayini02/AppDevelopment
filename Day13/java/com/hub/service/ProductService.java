package com.hub.service;




import org.springframework.stereotype.Service;

import com.hub.entity.Product;
import com.hub.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
 private final ProductRepository productRepository;

 public ProductService(ProductRepository productRepository) {
     this.productRepository = productRepository;
 }

 public List<Product> getAllProducts() {
     return productRepository.findAll();
 }

 public Optional<Product> getProductById(Long id) {
     return productRepository.findById(id);
 }

 public Product createProduct(Product product) {
     return productRepository.save(product);
 }

 public Product updateProduct(Long id, Product updatedProduct) {
     if (productRepository.existsById(id)) {
         updatedProduct.setId(id);
         return productRepository.save(updatedProduct);
     }
     return null;
 }

 public boolean deleteProduct(Long id) {
     if (productRepository.existsById(id)) {
         productRepository.deleteById(id);
         return true;
     }
     return false;
 }
}

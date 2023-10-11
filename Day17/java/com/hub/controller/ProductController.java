package com.hub.controller;

import java.util.List;
import java.util.Optional;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/api/items")
public class ProductController {
    private final ProductService itemService;
    @Autowired
    public ProductController(ProductService itemService) {
        this.itemService = itemService;
    }
    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllProducts();
    }
    @GetMapping("/{id}")
    public Optional<Product> getItemById(@PathVariable Long id) {
        return itemService.getProductById(id);
    }
    @PostMapping("/posting")
    public Item createItem(@RequestBody Item item) {
        return itemService.createItem(item);
    }
    @PutMapping("/{id}")
    public Item updateItem(@PathVariable Long id, @RequestBody Item updatedItem) {
        return itemService.updateItem(id, updatedItem);
    }
    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
    }
}
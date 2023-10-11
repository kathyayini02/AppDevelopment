package com.hub.service;

import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;

import com.hub.repository.ProductRepository;

public class ProductService {

    private final ProductRepository itemRepository;

    @Autowired
    public ProductService(ProductRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    public Item createItem(Item item) {
        return ProductRepository.save(item);
    }

    public Item updateItem(Long id, Item updatedItem) {
        if (!itemRepository.existsById(id)) {
            return null;
        }
        updatedItem.setId(id);
        return ProductRepository.save(updatedItem);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}
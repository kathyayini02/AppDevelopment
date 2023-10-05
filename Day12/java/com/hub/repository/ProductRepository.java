package com.hub.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hub.entity.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}

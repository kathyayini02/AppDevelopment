package com.hub.repository;





import org.springframework.data.jpa.repository.JpaRepository;

import com.hub.entity.UserLoginEntity;


public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer>{

}
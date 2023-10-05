package com.hub.repository;





import org.springframework.data.jpa.repository.JpaRepository;

import com.hub.entity.UserRegisterEntity;



public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>{

}
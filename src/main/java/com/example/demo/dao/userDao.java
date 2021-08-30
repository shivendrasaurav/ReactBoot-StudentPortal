package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Users;

public interface userDao extends JpaRepository<Users, Integer> {

}

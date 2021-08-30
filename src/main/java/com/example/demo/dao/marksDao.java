package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Marks;

public interface marksDao extends JpaRepository<Marks, Integer> {

}

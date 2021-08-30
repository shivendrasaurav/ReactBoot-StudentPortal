package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Batches;

public interface batchDao extends JpaRepository<Batches, Integer> {

}

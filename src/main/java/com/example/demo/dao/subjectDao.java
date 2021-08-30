package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Subjects;

public interface subjectDao extends JpaRepository<Subjects, Integer> {

}

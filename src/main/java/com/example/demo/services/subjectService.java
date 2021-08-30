package com.example.demo.services;

import java.util.Optional;

import com.example.demo.entities.Subjects;

public interface subjectService {
	public Optional<Subjects> getSubject(int subjectId);

	public Subjects addSubject(Subjects subject);
}

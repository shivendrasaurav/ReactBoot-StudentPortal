package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.subjectDao;
import com.example.demo.entities.Subjects;

@Service
public class subjectServiceImpl implements subjectService {
	
	@Autowired
	subjectDao subjectDao;

	@Override
	public Optional<Subjects> getSubject(int subjectId) {
		Optional<Subjects> s = subjectDao.findById(subjectId);
		return s;
	}

	@Override
	public Subjects addSubject(Subjects subject) {
		subjectDao.save(subject);
		return subject;
	}

}

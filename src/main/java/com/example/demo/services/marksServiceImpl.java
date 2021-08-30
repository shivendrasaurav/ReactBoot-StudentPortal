package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.marksDao;
import com.example.demo.entities.Marks;

@Service
public class marksServiceImpl implements marksService {
	
	@Autowired
	marksDao marksDao;

	@Override
	public List<Marks> getMarks() {
		// TODO Auto-generated method stub
		return marksDao.findAll();
	}

	@Override
	public Marks addMarks(Marks m) {
		marksDao.save(m);
		return m;
	}

	@Override
	public List<Marks> getUserMarks(int userId) {
		List<Marks> m = marksDao.findAll();
		List<Marks> m2 = new ArrayList<Marks>();
		for (Marks marks : m) {
			if(marks.getUser().getId() == userId) {
				m2.add(marks);
			}
		}
		return m2;
	}

}

package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Marks;

public interface marksService {
	public List<Marks> getMarks();

	public Marks addMarks(Marks m);

	public List<Marks> getUserMarks(int userId);

}

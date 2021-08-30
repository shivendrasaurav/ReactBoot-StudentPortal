package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.batchDao;
import com.example.demo.entities.Batches;

@Service
public class batchServiceImpl implements batchService {
	
	@Autowired
	private batchDao batchDao;

	@Override
	public Optional<Batches> getBatch(int batchId) {
		Optional<Batches> b = batchDao.findById(batchId);
		return b;
	}

	@Override
	public Batches addBatch(Batches batch) {
		batchDao.save(batch);
		return batch;
	}

}

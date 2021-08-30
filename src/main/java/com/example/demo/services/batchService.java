package com.example.demo.services;

import java.util.Optional;

import com.example.demo.entities.Batches;

public interface batchService {
	public Optional<Batches> getBatch(int batchId);

	public Batches addBatch(Batches batch);
}

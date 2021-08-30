package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.userDao;
import com.example.demo.entities.Users;

@Service
public class userServiceImpl implements userService {

	@Autowired
	private userDao userDao;

	@Override
	public List<Users> getUsers() {
		return userDao.findAll();
	}

	@Override
	public Users addUser(Users user) {
//		Batches b = new Batches();
//		user.setBatches(b);
		userDao.save(user);
		return user;
	}

	@Override
	public Optional<Users> getUser(int userId) {
		Optional<Users> u = userDao.findById(userId);
		return u;
	}

	@Override
	public Users putUser(Users user) {
		for (Users u : userDao.findAll()) {
			if (u.getId() == user.getId()) {
				u.setBatches(user.getBatches());
				u.setPassword(user.getPassword());
				u.setRole(user.getRole());
				u.setUsername(user.getUsername());
				userDao.save(u);
				return u;
			}
		}

		return null;

	}

	@Override
	public String delUser(int userId) {
//		userDao.deleteById(userId);
		return "Delete Successfull!";

	}

}

package com.example.demo.services;

import java.util.List;
import java.util.Optional;


import com.example.demo.entities.Users;

public interface userService {
	public Users addUser(Users user);

	public Optional<Users> getUser(int userId);
	public Users putUser(Users user);
	public String delUser(int userId);
	public List<Users> getUsers();

}

package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Batches;
import com.example.demo.entities.Marks;
import com.example.demo.entities.Subjects;
import com.example.demo.entities.Users;
import com.example.demo.services.batchService;
import com.example.demo.services.marksService;
import com.example.demo.services.subjectService;
import com.example.demo.services.userService;



@RestController
public class MyController {
	
	@Autowired
	private userService userService;
	
	@Autowired
	private batchService batchService;
	
	@Autowired
	private subjectService subjectService;
	
	@Autowired
	private marksService marksService;
	
	@GetMapping("/home")
	public String  home() {
		return "this is home";
	}
	
	@GetMapping("/user/{userId}")
	public Optional<Users> getUser(@PathVariable String userId) {
		return userService.getUser(Integer.parseInt(userId));
	}
	
	@GetMapping("/users")
	public List<Users> getUsers() {
		return userService.getUsers();
	}
	
	@PostMapping("/user")
	public Users addUser(@RequestBody Users user) {
		return userService.addUser(user);
	}
	
	@PutMapping("/user")
	public Users putUser(@RequestBody Users user) {
		return userService.putUser(user);
	}
	
	@DeleteMapping("/user/{userId}")
	public String delUser(@PathVariable String userId) {
		return userService.delUser(Integer.parseInt(userId));
		
	}
	
	@GetMapping("/batch/{batchId}")
	public Optional<Batches> getBatch(@PathVariable String batchId) {
		return batchService.getBatch(Integer.parseInt(batchId));
	}
	
	@PostMapping("/batch")
	public Batches addBatch(@RequestBody Batches batch) {
		return batchService.addBatch(batch);
	}
	
	@GetMapping("/subject/{subjectId}")
	public Optional<Subjects> getSubject(@PathVariable String subjectId) {
		return subjectService.getSubject(Integer.parseInt(subjectId));
	}
	
	@PostMapping("/subject")
	public Subjects addSubject(@RequestBody Subjects subject) {
		return subjectService.addSubject(subject);
	}
	
	@GetMapping("/marks")
	public List<Marks> getMarks() {
		return marksService.getMarks();
	}
	
	@GetMapping("/marks/{userId}")
	public List<Marks> getMark(@PathVariable String userId) {
		return marksService.getUserMarks(Integer.parseInt(userId));
	}
	
	@PostMapping("/marks")
	public Marks addMarks(@RequestBody Marks m) {
		return marksService.addMarks(m);
	}

}

package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Marks {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	private Subjects subject;
	@ManyToOne
	private Users appUser;
	@Override
	public String toString() {
		return "Marks [id=" + id + ", subject=" + subject + ", appUser=" + appUser + ", marksObtained=" + marksObtained
				+ ", marksOutOf=" + marksOutOf + "]";
	}

	private int marksObtained;
	private int marksOutOf;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Subjects getSubject() {
		return subject;
	}

	public void setSubject(Subjects subject) {
		this.subject = subject;
	}

	public Users getUser() {
		return appUser;
	}

	public void setUser(Users user) {
		this.appUser = user;
	}

	public int getMarksObtained() {
		return marksObtained;
	}

	public void setMarksObtained(int marksObtained) {
		this.marksObtained = marksObtained;
	}

	public int getMarksOutOf() {
		return marksOutOf;
	}

	public void setMarksOutOf(int marksOutOf) {
		this.marksOutOf = marksOutOf;
	}

}

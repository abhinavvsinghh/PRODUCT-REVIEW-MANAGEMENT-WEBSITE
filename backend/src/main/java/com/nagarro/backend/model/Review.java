package com.nagarro.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int code;
	private int rating;
	private String review;
	private String name;
	private String email;
	private boolean status;

	public int getCode() {
		return code;
	}

	public int getRating() {
		return rating;
	}

	public String getReview() {
		return review;
	}

	public String getEmail() {
		return email;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Review [code=" + code + ", rating=" + rating + ", review=" + review + ", email=" + email + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}

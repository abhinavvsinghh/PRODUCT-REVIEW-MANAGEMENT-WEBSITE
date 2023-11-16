package com.nagarro.backend.model;

import java.io.Serializable;

public class UserSignin implements Serializable {
	private String email;
	private String password;

	public UserSignin() {

	}

	public UserSignin(String email, String password) {
		this.setEmail(email);
		this.setPassword(password);
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}

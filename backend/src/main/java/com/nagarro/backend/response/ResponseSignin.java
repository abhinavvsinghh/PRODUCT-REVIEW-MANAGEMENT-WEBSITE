package com.nagarro.backend.response;

public class ResponseSignin {
	private boolean status;
	private String email;
	private String name;
	private String message;
	private String role;
	private String jwt;

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public boolean isStatus() {
		return status;
	}

	public String getEmail() {
		return email;
	}

	public String getName() {
		return name;
	}

	public String getMessage() {
		return message;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}

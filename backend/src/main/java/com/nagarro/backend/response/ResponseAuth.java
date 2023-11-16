package com.nagarro.backend.response;

public class ResponseAuth {
	private final String jwt;

	public ResponseAuth(String jwt) {
		this.jwt = jwt;
	}

	public String getJwt() {
		return jwt;
	}

}

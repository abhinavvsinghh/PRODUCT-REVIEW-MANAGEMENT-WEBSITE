package com.nagarro.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.backend.model.User;
import com.nagarro.backend.repo.UserRepo;

@Service
public class UserService {
	private final UserRepo userRepo;

	@Autowired
	public UserService(UserRepo userRepo) {
		this.userRepo = userRepo;
	}

	// save user
	public User addUser(User user) {
		// checking if user already registered
		if (userRepo.findByEmail(user.getEmail()) != null) {
			return null;
		}
		return userRepo.save(user);
	}

	// get user
	public String getUser(String email, String password) {
		// checking if user is present
		if (userRepo.findByEmail(email) != null) {
			User user = userRepo.findByEmail(email);
			if (password.equals(user.getPassword())) {// isPassswordMath == true) {
				return "true";
			} else {
				return "invalid";
			}
		} else {
			return "false";
		}
	}

	// get user
	public User getUser(String email) {
		return userRepo.findByEmail(email);
	}

	// get total number of registered users
	public int noOfUser() {
		return userRepo.findNoOfUser();
	}

}

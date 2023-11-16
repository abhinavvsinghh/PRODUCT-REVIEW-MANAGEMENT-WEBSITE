package com.nagarro.backend.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	UserService userService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.nagarro.backend.model.User user = this.userService.getUser(username);
		if (user == null) {
			throw new UsernameNotFoundException("Not found!");
		}
		return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}

}

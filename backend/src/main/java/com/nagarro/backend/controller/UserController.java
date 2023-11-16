package com.nagarro.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.backend.helper.JwtUtil;
import com.nagarro.backend.model.User;
import com.nagarro.backend.model.UserSignin;
import com.nagarro.backend.response.ResponseAuth;
import com.nagarro.backend.response.ResponseSignin;
import com.nagarro.backend.response.ResponseSignup;
import com.nagarro.backend.service.CustomUserDetailsService;
import com.nagarro.backend.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	@Autowired
	private JwtUtil jwtTokenUtil;

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/hello")
	public String hello() {
		return "spring boot has started";
	}

	@PostMapping("/signup")
	public ResponseSignup saveUser(@RequestBody User user) {
		User checkUser = userService.addUser(user);
		ResponseSignup res = new ResponseSignup();

		if (checkUser == null) {
			res.setStatus(false);
			res.setMessage("Email Id Already Exists!");
		} else {
			res.setStatus(true);
			res.setMessage("User Registration Successful!");
		}
		return res;
	}

	@PostMapping("/signin")
	public ResponseSignin getUser(@RequestBody UserSignin user) throws Exception {
		String checkUser = userService.getUser(user.getEmail(), user.getPassword());
		User getUser = userService.getUser(user.getEmail());
		ResponseSignin res = new ResponseSignin();

		if (checkUser.equals("true")) {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

			final UserDetails userDetails = customUserDetailsService.loadUserByUsername(user.getEmail());

			final String jwt = jwtTokenUtil.generateToken(userDetails);

			res.setStatus(true);
			res.setEmail(user.getEmail());
			String name = getUser.getFirstName() + " " + getUser.getLastName();
			res.setName(name);
			res.setRole(getUser.getRole());
			res.setMessage("Login Successful!");
			res.setJwt(jwt);
		} else if (checkUser.equals("false")) {
			res.setStatus(false);
			res.setMessage("Email Id doesn't exist!");
		} else if (checkUser.equals("invalid")) {
			res.setRole(getUser.getRole());
			res.setStatus(false);
			res.setMessage("Invalid Credentials!");
		}
		return res;

	}

}

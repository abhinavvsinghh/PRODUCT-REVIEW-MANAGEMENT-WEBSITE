package com.nagarro.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.backend.service.ProductService;
import com.nagarro.backend.service.ReviewService;
import com.nagarro.backend.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/stats")
public class StatsController {
	private final UserService userService;
	private final ProductService productService;
	private final ReviewService reviewService;

	public StatsController(UserService userService, ProductService productService, ReviewService reviewService) {
		this.userService = userService;
		this.productService = productService;
		this.reviewService = reviewService;
	}

	@GetMapping("/users")
	public int getNoOfUser() {
		return userService.noOfUser();
	}

	@GetMapping("/products")
	public int getNoOfProduct() {
		return productService.noOfProduct();
	}

	@GetMapping("/reviews")
	public int getNoOfReview() {
		return reviewService.noOfReview();
	}

}

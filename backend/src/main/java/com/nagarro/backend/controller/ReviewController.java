package com.nagarro.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.backend.model.Review;
import com.nagarro.backend.service.ReviewService;

@RestController
@CrossOrigin
@RequestMapping("/reviews")
public class ReviewController {

	private final ReviewService reviewService;

	public ReviewController(ReviewService reviewService) {
		this.reviewService = reviewService;
	}

	@PostMapping("/add")
	public Review addReview(@RequestBody Review review) {
		return reviewService.addReview(review);
	}

	@GetMapping("/approved")
	public List<Review> getAllApprovedReview() {
		return reviewService.getAllApprovedReview();
	}

	@GetMapping("/notapproved")
	public List<Review> getAllNotApprovedReview() {
		return reviewService.getAllNotApprovedReview();
	}

	@GetMapping
	public List<Review> productReview(@RequestParam("code") int code) {
		return reviewService.getAllReviewOfProduct(code);
	}

	@DeleteMapping("/approve")
	public int approve(@RequestParam("id") int id, @RequestParam("email") String email) {
		return reviewService.approveReview(id, email);
	}

	@DeleteMapping("/delete")
	public int delete(@RequestParam("id") int id, @RequestParam("email") String email) {
		return reviewService.deleteReview(id, email);
	}

	@GetMapping("/avgRating")
	public float averageRating(@RequestParam("code") int code) {
		return reviewService.getAverageRating(code);
	}

}

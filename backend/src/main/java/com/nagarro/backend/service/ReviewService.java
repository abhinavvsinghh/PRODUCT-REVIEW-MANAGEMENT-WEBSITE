package com.nagarro.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.backend.model.Review;
import com.nagarro.backend.repo.ReviewRepo;

@Service
@Transactional
public class ReviewService {
	private final ReviewRepo reviewRepo;

	@Autowired
	public ReviewService(ReviewRepo reviewRepo) {
		this.reviewRepo = reviewRepo;
	}

	// add review
	public Review addReview(Review review) {
		review.setStatus(false);
		return reviewRepo.save(review);
	}

	// get all approved reviews
	public List<Review> getAllApprovedReview() {
		return reviewRepo.findAllApprovedReview();
	}

	// get all not approved reviews
	public List<Review> getAllNotApprovedReview() {
		return reviewRepo.findAllNotApprovedReview();
	}

	// approve review
	public int approveReview(int id, String email) {
		return reviewRepo.updateStatus(id, email);

	}

	// delete review
	public int deleteReview(int id, String email) {
		return reviewRepo.deleteByCodeAndEmail(id, email);
	}

	// get average rating of a particular product
	public float getAverageRating(int code) {
		if (reviewRepo.getAverageRating(code) == null) {
			return 0;
		} else {
			return reviewRepo.getAverageRating(code);
		}
	}

	// get all reviews of a particular product which are approved
	public List<Review> getAllReviewOfProduct(int code) {
		return reviewRepo.getAllProductReviewByIdAndStatus(code);
	}

	// get total number of added reviews
	public int noOfReview() {
		return reviewRepo.findNoOfReview();
	}

}

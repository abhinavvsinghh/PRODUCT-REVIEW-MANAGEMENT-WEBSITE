package com.nagarro.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.nagarro.backend.model.Review;

public interface ReviewRepo extends JpaRepository<Review, Integer> {

	@Query("select r from Review r where r.status = true")
	List<Review> findAllApprovedReview();

	@Query("select r from Review r where r.status = false")
	List<Review> findAllNotApprovedReview();

	@Modifying
	@Query("update Review  r set r.status = true where r.id = :id and email = :email")
	Integer updateStatus(Integer id, String email);

	@Query("select avg(rating) from Review r where r.code =:code and r.status = true")
	Float getAverageRating(Integer code);

	@Query("select r from Review r where r.code =:code and r.status = true")
	List<Review> getAllProductReviewByIdAndStatus(Integer code);

	@Modifying
	@Query("delete Review r where r.id =:id and email = :email")
	Integer deleteByCodeAndEmail(Integer id, String email);

	@Query("select count(id) from Review r where r.status = true")
	int findNoOfReview();

}

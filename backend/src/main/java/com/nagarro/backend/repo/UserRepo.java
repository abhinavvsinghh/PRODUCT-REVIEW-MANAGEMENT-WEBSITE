package com.nagarro.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nagarro.backend.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	User findByEmail(String email);

	@Query("select count(id) from User")
	int findNoOfUser();

}

package com.nagarro.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nagarro.backend.model.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

	Product findByCode(int code);

	@Query("from Product p where p.code = :code and p.name like %:name% and p.brand like %:brand%")
	List<Product> findByCodeNameBrand(Integer code, String name, String brand);

	@Query("from Product p where p.name like %:name% and p.brand like %:brand%")
	List<Product> findByCodeNameBrand(String name, String brand);

	@Query("select count(code) from Product")
	int findNoOfProduct();

}

package com.nagarro.backend.service;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.backend.model.Product;
import com.nagarro.backend.repo.ProductRepo;

@Service
public class ProductService {
	private final ProductRepo productRepo;

	@Autowired
	public ProductService(ProductRepo productRepo) {
		this.productRepo = productRepo;
	}

	// add product
	public boolean addProduct(Product product) throws IOException {
		// if product already exists
		if (productRepo.findByCode(product.getCode()) != null) {
			return false;
		} else {
			String path = "C:\\Users\\abhinavsingh04\\Desktop\\images" + product.getPath().substring(11);
			FileInputStream file = new FileInputStream(path);
			byte[] data = new byte[file.available()];
			file.read(data);
			product.setPhotos(data);
			productRepo.save(product);
			file.close();
			return true;
		}
	}

	// get all products
	public List<Product> getAllProduct() {
		return productRepo.findAll();
	}

	// get single product
	public Optional<Product> getProduct(int code) {
		return productRepo.findById(code);
	}

	// get product after filtering
	public List<Product> getProduct(int code, String name, String brand) {
		return productRepo.findByCodeNameBrand(code, name, brand);
	}

	public List<Product> getProduct(String name, String brand) {
		return productRepo.findByCodeNameBrand(name, brand);
	}

	// get total number of added products
	public int noOfProduct() {
		return productRepo.findNoOfProduct();
	}

}

package com.nagarro.backend.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.backend.model.Product;
import com.nagarro.backend.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {

	private final ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@PostMapping("/add")
	public boolean addProduct(@RequestBody Product product) throws IOException {
		if (productService.addProduct(product)) {
			return true;
		} else {
			return false;
		}
	}

	@GetMapping()
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

	@GetMapping("/code")
	public Optional<Product> getProduct(@RequestParam("code") int code) {
		return productService.getProduct(code);
	}

	@GetMapping("/search")
	public List<Product> searchProduct(@RequestParam(value = "code", required = false) int code,
			@RequestParam(value = "name", required = false) String name,
			@RequestParam(value = "brand", required = false) String brand) {
		return productService.getProduct(code, name, brand);
	}

	@GetMapping("/searchWithoutCode")
	public List<Product> searchProduct(@RequestParam(value = "name", required = false) String name,
			@RequestParam(value = "brand", required = false) String brand) {
		return productService.getProduct(name, brand);
	}

}

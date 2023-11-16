package com.nagarro.backend.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Product implements Serializable {

	@Id
	private int code;
	private String name;
	private String brand;
	private String path;
	@Lob
	private byte[] photos;

	public String getName() {
		return name;
	}

	public String getBrand() {
		return brand;
	}

	public int getCode() {
		return code;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public byte[] getPhotos() {
		return photos;
	}

	public void setPhotos(byte[] photos) {
		this.photos = photos;
	}

	@Override
	public String toString() {
		return "Product [name=" + name + ", brand=" + brand + ", code=" + code + "]";
	}

}

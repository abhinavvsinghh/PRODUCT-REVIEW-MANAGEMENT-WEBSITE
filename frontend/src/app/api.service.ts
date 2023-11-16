import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  static isLoggedIn = false;

  apiUrl = 'http://localhost:8081';

  //signup
  signup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/signup`, data);
  }

  //signin
  signin(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/signin`, data);
  }

  //total no of registered users
  noOfUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/users`);
  }

  //total no of registered products
  noOfProduct(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/products`);
  }

  //total no of approved reviews
  noOfReview(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/reviews`);
  }

  //add product
  addProduct(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products/add`, data);
  }

  //get all product details
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  //get single product details
  getSingleProduct(code: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("code", code);

    return this.http.get(`${this.apiUrl}/products/code`, { params: queryParams });
  }

  //search product
  searchProduct(code: any, name: any, brand: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("code", code);
    queryParams = queryParams.append("name", name);
    queryParams = queryParams.append("brand", brand);

    return this.http.get(`${this.apiUrl}/products/search`, { params: queryParams });
  }

  //search product without code
  searchProductWithoutCode(name: any, brand: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name", name);
    queryParams = queryParams.append("brand", brand);

    return this.http.get(`${this.apiUrl}/products/searchWithoutCode`, { params: queryParams });
  }

  //add review
  addReview(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reviews/add`, data);
  }

  //get all approved reviews
  getAllApprovedReview(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviews/approved`);
  }

  //get all not approved reviews
  getAllNotApprovedReview(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviews/notapproved`);
  }

  //get all approved review of a particular product
  getAllApprovedReviewOfSingleProduct(code: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("code", code);

    return this.http.get(`${this.apiUrl}/reviews/`, { params: queryParams });
  }

  //approve a review
  approveReview(id: any, email: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    queryParams = queryParams.append("email", email);
    console.log(id, email);
    return this.http.delete(`${this.apiUrl}/reviews/approve`, { params: queryParams });
  }

  //delete a review
  deleteReview(id: any, email: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    queryParams = queryParams.append("email", email);
    console.log(id, email);
    return this.http.delete(`${this.apiUrl}/reviews/delete`, { params: queryParams });
  }

  //get average rating of a product
  getAverageRatingOfProduct(code: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("code", code);

    return this.http.get(`${this.apiUrl}/reviews/avgRating`, { params: queryParams });
  }

  //get token
  getToken() {
    return localStorage.getItem('token');
  }

  //check user login
  checkLogin(data: any) {
    ApiService.isLoggedIn = data;
  }

}

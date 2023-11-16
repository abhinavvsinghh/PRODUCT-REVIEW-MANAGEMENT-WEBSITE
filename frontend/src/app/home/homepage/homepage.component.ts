import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  totalUsers: any;
  totalProducts: any;
  totalReviews: any;

  ngOnInit(): void {
    this.getAllData();
  }

  //get all data
  getAllData() {
    this.service.noOfUser().subscribe((res) => {
      this.totalUsers = res;
    });
    this.service.noOfProduct().subscribe((res) => {
      this.totalProducts = res;
    });
    this.service.noOfReview().subscribe((res) => {
      this.totalReviews = res;
    });
  }

  //user signup
  userSignup() {
    this.router.navigate(['user/signup']);
  }

  //user login
  userLogin() {
    this.router.navigate(['user/login']);
  }

  //admin login
  adminLogin() {
    this.router.navigate(['admin/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-review-record',
  templateUrl: './review-record.component.html',
  styleUrls: ['./review-record.component.css']
})
export class ReviewRecordComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  name = localStorage.getItem('username');
  data: any;
  size: any;

  ngOnInit(): void {
    this.getAllData()
  }

  //add product
  addProduct() {
    this.router.navigate(['admin/add']).then(() => {
      // window.location.reload();
    });
  }

  //approve review
  approve(id: any, email: any) {
    this.service.approveReview(id, email).subscribe((res) => {
      this.getAllData();
      // window.location.reload();
    });
  }

  //reject review
  reject(id: any, email: any) {
    this.service.deleteReview(id, email).subscribe((res) => {
      this.getAllData();
      // window.location.reload();
    });
  }


  //logout
  logout() {
    localStorage.clear();
    this.router.navigate(['admin/login']).then(() => {
      window.location.reload();
    });
  }

  getAllData() {
    this.service.getAllNotApprovedReview().subscribe((res) => {
      console.log(res);
      this.data = res;
      this.size = res.length;
    })
  }

}

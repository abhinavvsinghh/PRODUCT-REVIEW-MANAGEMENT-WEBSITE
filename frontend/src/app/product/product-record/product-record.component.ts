import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product-record',
  templateUrl: './product-record.component.html',
  styleUrls: ['./product-record.component.css']
})
export class ProductRecordComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  name = localStorage.getItem('username');
  data: any;
  rating: any;
  productCode: any;

  ngOnInit(): void {
    this.getAllData();
  }

  //get all data
  getAllData() {
    this.service.getAllProduct().subscribe((res) => {
      this.data = res;
    })
  }

  avgRating(code: any): Observable<Number> {
    this.service.getAverageRatingOfProduct(code).subscribe((res) => {
      this.rating = res;
    });
    return this.rating;
  }

  search() {
    this.router.navigate(['product/search']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['user/login']).then(() => {
      window.location.reload();
    });
  }

}

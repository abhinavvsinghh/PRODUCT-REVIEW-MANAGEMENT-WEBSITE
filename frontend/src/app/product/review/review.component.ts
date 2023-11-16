import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router) { }
  name = localStorage.getItem('username');
  data: any;
  avgRating: any;
  successMsgShow = false;
  successMsg = 'Sent To Admin For Approval.';

  ngOnInit(): void {
    this.getAllData();
  }

  addReviewForm = new FormGroup({
    code: new FormControl(this.route.snapshot.paramMap.get('code')),
    name: new FormControl(this.name),
    email: new FormControl(localStorage.getItem('email')),
    review: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required)
  });

  getAllData() {
    this.service.getAllApprovedReviewOfSingleProduct(this.route.snapshot.paramMap.get('code')).subscribe((res) => {
      this.data = res;
    });
    this.service.getAverageRatingOfProduct(this.route.snapshot.paramMap.get('code')).subscribe((res) => {
      this.avgRating = res;
    })
  }

  addReview() {
    if (this.addReviewForm.valid) {
      this.service.addReview(this.addReviewForm.value).subscribe((res) => {
        this.successMsgShow = true;
      });
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['user/login']).then(() => {
      window.location.reload();
    });
  }

}

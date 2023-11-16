import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  errMsgShow = false;
  errMsg: any;
  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('user')
  });

  Submit() {
    if (this.signupForm.valid) {
      this.errMsgShow = false;
      //call signup api
      this.service.signup(this.signupForm.value).subscribe((res) => {
        if (res.status == true) {
          this.router.navigate(['user/login']);
        } else {
          this.errMsgShow = true;
          this.errMsg = res.message;
        }
      })
    }
  }

}

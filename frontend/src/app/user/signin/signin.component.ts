import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  errMsgShow = false;
  errMsg: any;

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  Submit() {
    if (this.loginForm.valid) {
      this.errMsgShow = false;
      //call signup api
      this.service.signin(this.loginForm.value).subscribe((res) => {
        if (res.status == true) {
          this.errMsgShow = false;
          //store data in localStorage
          localStorage.clear();
          localStorage.setItem('username', res.name);
          localStorage.setItem('email', res.email);
          localStorage.setItem('token', res.jwt);
          this.service.checkLogin(true);
          this.router.navigate(['product/record']);
        } else {
          this.errMsgShow = true;
          this.errMsg = res.message;
        }
      })
    }
  }

}

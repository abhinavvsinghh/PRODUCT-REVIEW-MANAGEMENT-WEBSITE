import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  errMsgShow = true;
  errMsg: any;

  ngOnInit(): void {
    this.errMsg = "Welcome Admin!"
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
        if (res.role === 'user') {
          this.errMsgShow = true;
          this.errMsg = 'Not Authorised';
        } else if ((res.role === 'admin') && (res.status == true)) {
          this.errMsgShow = false;
          //store data in localStorage
          localStorage.clear();
          localStorage.setItem('username', res.name);
          localStorage.setItem('token', res.jwt);
          this.service.checkLogin(true);
          this.router.navigate(['admin/record']);
        } else if (res.status == false) {
          this.errMsgShow = true;
          this.errMsg = res.message;
        }
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }
  name = localStorage.getItem('username');
  errMsgShow = false;
  errMsg: any;
  successMsgShow = false;
  successMsg = 'Product Uploaded.';
  size: any;

  ngOnInit(): void {
    this.service.noOfProduct().subscribe((res) => {
      this.size = res;
    })
  }

  addProductForm = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    path: new FormControl('', Validators.required),
  });

  //add product
  addProduct() {
    if (this.addProductForm.valid) {
      //call signup api
      this.service.addProduct(this.addProductForm.value).subscribe((res) => {
        if (res == true) {
          this.errMsgShow = false;
          this.successMsgShow = true;
          // window.location.reload();
        } else {
          this.errMsgShow = true;
          this.errMsg = "Product Couldn't Be Uploaded.";
        }
      })
    }
  }

}

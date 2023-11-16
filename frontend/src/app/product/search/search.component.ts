import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router) { }
  name = localStorage.getItem('username');
  data: any;
  errMsgShow = false;
  errMsg = 'No Results Found.'

  ngOnInit(): void {
  }

  public searchForm = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
  });

  search() {
    if (this.searchForm.value.code === '') {
      this.service.searchProductWithoutCode(this.searchForm.value.name, this.searchForm.value.brand).subscribe((res) => {
        this.data = res;
        if (this.data.length == 0) {
          this.errMsgShow = true;
        } else {
          this.errMsgShow = false;
        }
      })
    } else {
      this.service.searchProduct(this.searchForm.value.code, this.searchForm.value.name, this.searchForm.value.brand).subscribe((res) => {
        this.data = res;
        if (this.data.length == 0) {
          this.errMsgShow = true;
        } else {
          this.errMsgShow = false;
        }
      })
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['user/login']).then(() => {
      window.location.reload();
    });
  }

}

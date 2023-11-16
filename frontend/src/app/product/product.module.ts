import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { ProductRoutingModule } from './product-routing.module';
import { ProductRecordComponent } from './product-record/product-record.component';
import { SearchComponent } from './search/search.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    ProductRecordComponent,
    SearchComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule
  ]
})
export class ProductModule { }

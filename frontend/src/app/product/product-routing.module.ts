import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductRecordComponent } from './product-record/product-record.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { AuthguardGuard } from '../authguard.guard';

const routes: Routes = [
  {
    path: 'product',
    children: [
      { path: 'record', component: ProductRecordComponent, canActivate: [AuthguardGuard] },
      { path: 'record/review/:code', component: ReviewComponent, canActivate: [AuthguardGuard] },
      { path: 'search/review/:code', component: ReviewComponent, canActivate: [AuthguardGuard] },
      { path: 'search', component: SearchComponent, canActivate: [AuthguardGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

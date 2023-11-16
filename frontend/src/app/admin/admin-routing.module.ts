import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { ReviewRecordComponent } from './review-record/review-record.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'record', component: ReviewRecordComponent, canActivate: [AuthguardGuard] },
      { path: 'add', component: AddProductComponent, canActivate: [AuthguardGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dichvuRoutes } from './dichvu-routing.module';
import { DichvuComponent } from './dichvu.component';
import { DichvuListComponent } from './dichvu-list/dichvu-list.component';
import { DichvuDetailComponent } from './dichvu-detail/dichvu-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DichvuListComponent,
    DichvuDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dichvuRoutes),

  ]
})
export class DichvuModule { }

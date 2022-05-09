import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DichvuRoutingModule } from './dichvu-routing.module';
import { DichvuComponent } from './dichvu.component';
import { DichvuListComponent } from './dichvu-list/dichvu-list.component';
import { DichvuDetailComponent } from './dichvu-detail/dichvu-detail.component';


@NgModule({
  declarations: [
    DichvuListComponent,
    DichvuDetailComponent
  ],
  imports: [
    CommonModule,
    DichvuRoutingModule
  ]
})
export class DichvuModule { }

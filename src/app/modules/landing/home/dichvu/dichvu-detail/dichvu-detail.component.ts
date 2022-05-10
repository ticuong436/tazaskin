import { Component, OnInit } from '@angular/core';
import {DichvuService} from '../dichvu.service';
import { Observable } from 'rxjs';
import {DichVu} from '../dichvu.types'
@Component({
  selector: 'app-dichvu-detail',
  templateUrl: './dichvu-detail.component.html',
  styleUrls: ['./dichvu-detail.component.scss']
})
export class DichvuDetailComponent implements OnInit {
  dichvu$: Observable<DichVu>;
  theme:any
  constructor(private dichvuService: DichvuService) { }

  ngOnInit(): void {
    this.dichvuService.dichvu$
      
    .subscribe((course: any) => {
      
        // Update the counts
        this.theme = course;
        console.log(this.theme);
        
        
    });
  }
    

}

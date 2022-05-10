import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DichvuService } from '../dichvu.service';
import { DichVu } from '../dichvu.types';

@Component({
  selector: 'app-dichvu-list',
  templateUrl: './dichvu-list.component.html',
  styleUrls: ['./dichvu-list.component.scss']
})
export class DichvuListComponent implements OnInit {
  courses$: Observable<DichVu[]>;

  themes: any;
  selectedCourse: any;
  constructor(private duchvuService: DichvuService) {}

  ngOnInit(): void {
      this.duchvuService.dichvus$
          
          .subscribe((result) => (this.themes = result));
  }


}


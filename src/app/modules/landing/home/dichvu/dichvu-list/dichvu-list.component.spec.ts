import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvuListComponent } from './dichvu-list.component';

describe('DichvuListComponent', () => {
  let component: DichvuListComponent;
  let fixture: ComponentFixture<DichvuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DichvuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

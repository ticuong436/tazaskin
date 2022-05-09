import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvuDetailComponent } from './dichvu-detail.component';

describe('DichvuDetailComponent', () => {
  let component: DichvuDetailComponent;
  let fixture: ComponentFixture<DichvuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DichvuDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

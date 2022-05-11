import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuongdanCauhoiComponent } from './huongdan-cauhoi.component';

describe('HuongdanCauhoiComponent', () => {
  let component: HuongdanCauhoiComponent;
  let fixture: ComponentFixture<HuongdanCauhoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuongdanCauhoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuongdanCauhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HuongdanCauhoiService } from './huongdan-cauhoi.service';

describe('HuongdanCauhoiService', () => {
  let service: HuongdanCauhoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuongdanCauhoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

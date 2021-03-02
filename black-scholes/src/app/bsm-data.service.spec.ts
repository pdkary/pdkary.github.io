import { TestBed } from '@angular/core/testing';

import { BsmDataService } from './bsm-data.service';

describe('BsmDataService', () => {
  let service: BsmDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsmDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

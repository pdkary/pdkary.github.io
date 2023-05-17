import { TestBed } from '@angular/core/testing';

import { RubixService } from './rubix.service';

describe('RubixService', () => {
  let service: RubixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

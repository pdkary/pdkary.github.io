import { TestBed } from '@angular/core/testing';

import { MinkowskiService } from './minkowski.service';

describe('MinkowskiService', () => {
  let service: MinkowskiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinkowskiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

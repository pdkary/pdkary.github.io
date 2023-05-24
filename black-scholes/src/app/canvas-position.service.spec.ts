import { TestBed } from '@angular/core/testing';

import { CanvasPositionService } from './canvas-position.service';

describe('CanvasPositionService', () => {
  let service: CanvasPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

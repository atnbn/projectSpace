import { TestBed } from '@angular/core/testing';

import { TouchSlideService } from '../services/touch-slide.service';

describe('TouchSlideService', () => {
  let service: TouchSlideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouchSlideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

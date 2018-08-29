import { TestBed, inject } from '@angular/core/testing';

import { RangersService } from './rangers.service';

describe('RangersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RangersService]
    });
  });

  it('should be created', inject([RangersService], (service: RangersService) => {
    expect(service).toBeTruthy();
  }));
});

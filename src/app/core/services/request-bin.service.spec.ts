import { TestBed, inject } from '@angular/core/testing';

import { RequestBinService } from './request-bin.service';

describe('RequestBinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestBinService]
    });
  });

  it('should be created', inject([RequestBinService], (service: RequestBinService) => {
    expect(service).toBeTruthy();
  }));
});

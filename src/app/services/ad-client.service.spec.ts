import { TestBed, inject } from '@angular/core/testing';

import { AdClientService } from './ad-client.service';

describe('AdClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdClientService]
    });
  });

  it('should be created', inject([AdClientService], (service: AdClientService) => {
    expect(service).toBeTruthy();
  }));
});

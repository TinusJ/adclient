import { TestBed, async, inject } from '@angular/core/testing';

import { AdClientGuard } from './ad-client.guard';

describe('AdClientGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdClientGuard]
    });
  });

  it('should ...', inject([AdClientGuard], (guard: AdClientGuard) => {
    expect(guard).toBeTruthy();
  }));
});

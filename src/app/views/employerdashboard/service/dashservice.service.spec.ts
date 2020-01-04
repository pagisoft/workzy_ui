import { TestBed } from '@angular/core/testing';

import { DashserviceService } from './dashservice.service';

describe('DashserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashserviceService = TestBed.get(DashserviceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LicenceCubesService } from './licence-cubes.service';

describe('LicenceCubesService', () => {
  let service: LicenceCubesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenceCubesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

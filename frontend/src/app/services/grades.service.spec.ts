import { TestBed } from '@angular/core/testing';

import { GradesService } from './grades.service';

describe('GradesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradesService = TestBed.get(GradesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetBreakpointService } from './get-breakpoint.service';

describe('GetBreakpointService', () => {
  let service: GetBreakpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBreakpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RegristrarService } from './regristrar.service';

describe('RegristrarService', () => {
  let service: RegristrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegristrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

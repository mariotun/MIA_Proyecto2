import { TestBed } from '@angular/core/testing';

import { GetusuariosService } from './getusuarios.service';

describe('GetusuariosService', () => {
  let service: GetusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MstUserService } from './mst-user.service';

describe('MstUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MstUserService = TestBed.get(MstUserService);
    expect(service).toBeTruthy();
  });
});

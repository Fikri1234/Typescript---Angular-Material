import { TestBed } from '@angular/core/testing';

import { MstUserRoleService } from './mst-user-role.service';

describe('MstUserRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MstUserRoleService = TestBed.get(MstUserRoleService);
    expect(service).toBeTruthy();
  });
});

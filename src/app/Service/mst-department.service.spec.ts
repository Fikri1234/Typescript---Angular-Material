import { TestBed } from '@angular/core/testing';

import { MstDepartmentService } from './mst-department.service';

describe('MstDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MstDepartmentService = TestBed.get(MstDepartmentService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstUserUpdateComponent } from './mst-user-update.component';

describe('MstUserUpdateComponent', () => {
  let component: MstUserUpdateComponent;
  let fixture: ComponentFixture<MstUserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstUserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstUserComponent } from './mst-user.component';

describe('MstUserComponent', () => {
  let component: MstUserComponent;
  let fixture: ComponentFixture<MstUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstUserInsertComponent } from './mst-user-insert.component';

describe('MstUserInsertComponent', () => {
  let component: MstUserInsertComponent;
  let fixture: ComponentFixture<MstUserInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstUserInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstUserInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

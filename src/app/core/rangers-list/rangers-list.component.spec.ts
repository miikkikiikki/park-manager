import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangersListComponent } from './rangers-list.component';

describe('RangersListComponent', () => {
  let component: RangersListComponent;
  let fixture: ComponentFixture<RangersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

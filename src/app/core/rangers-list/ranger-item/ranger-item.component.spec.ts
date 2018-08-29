import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangerItemComponent } from './ranger-item.component';

describe('RangerItemComponent', () => {
  let component: RangerItemComponent;
  let fixture: ComponentFixture<RangerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

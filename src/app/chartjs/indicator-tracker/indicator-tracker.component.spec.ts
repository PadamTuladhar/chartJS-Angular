import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorTrackerComponent } from './indicator-tracker.component';

describe('IndicatorTrackerComponent', () => {
  let component: IndicatorTrackerComponent;
  let fixture: ComponentFixture<IndicatorTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorTrackerComponent]
    });
    fixture = TestBed.createComponent(IndicatorTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

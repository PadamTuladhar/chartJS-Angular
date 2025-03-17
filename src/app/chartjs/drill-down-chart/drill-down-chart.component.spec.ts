import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillDownChartComponent } from './drill-down-chart.component';

describe('DrillDownChartComponent', () => {
  let component: DrillDownChartComponent;
  let fixture: ComponentFixture<DrillDownChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrillDownChartComponent]
    });
    fixture = TestBed.createComponent(DrillDownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

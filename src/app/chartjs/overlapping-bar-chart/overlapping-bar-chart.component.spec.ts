import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlappingBarChartComponent } from './overlapping-bar-chart.component';

describe('OverlappingBarChartComponent', () => {
  let component: OverlappingBarChartComponent;
  let fixture: ComponentFixture<OverlappingBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlappingBarChartComponent]
    });
    fixture = TestBed.createComponent(OverlappingBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

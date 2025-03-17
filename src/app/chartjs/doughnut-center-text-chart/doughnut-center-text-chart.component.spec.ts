import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutCenterTextChartComponent } from './doughnut-center-text-chart.component';

describe('DoughnutCenterTextChartComponent', () => {
  let component: DoughnutCenterTextChartComponent;
  let fixture: ComponentFixture<DoughnutCenterTextChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoughnutCenterTextChartComponent]
    });
    fixture = TestBed.createComponent(DoughnutCenterTextChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

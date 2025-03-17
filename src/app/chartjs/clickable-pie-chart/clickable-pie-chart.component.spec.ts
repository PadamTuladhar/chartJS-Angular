import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickablePieChartComponent } from './clickable-pie-chart.component';

describe('ClickablePieChartComponent', () => {
  let component: ClickablePieChartComponent;
  let fixture: ComponentFixture<ClickablePieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickablePieChartComponent]
    });
    fixture = TestBed.createComponent(ClickablePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

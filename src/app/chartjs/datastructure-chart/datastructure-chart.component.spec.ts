import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructureChartComponent } from './datastructure-chart.component';

describe('DatastructureChartComponent', () => {
  let component: DatastructureChartComponent;
  let fixture: ComponentFixture<DatastructureChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatastructureChartComponent]
    });
    fixture = TestBed.createComponent(DatastructureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

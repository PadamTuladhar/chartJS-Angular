import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamingChartComponent } from './live-streaming-chart.component';

describe('LiveStreamingChartComponent', () => {
  let component: LiveStreamingChartComponent;
  let fixture: ComponentFixture<LiveStreamingChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveStreamingChartComponent]
    });
    fixture = TestBed.createComponent(LiveStreamingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

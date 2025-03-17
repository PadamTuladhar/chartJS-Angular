import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthIndicatorComponent } from './growth-indicator.component';

describe('GrowthIndicatorComponent', () => {
  let component: GrowthIndicatorComponent;
  let fixture: ComponentFixture<GrowthIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrowthIndicatorComponent]
    });
    fixture = TestBed.createComponent(GrowthIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

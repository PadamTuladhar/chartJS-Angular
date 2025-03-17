import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesegmentStylingComponent } from './linesegment-styling.component';

describe('LinesegmentStylingComponent', () => {
  let component: LinesegmentStylingComponent;
  let fixture: ComponentFixture<LinesegmentStylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinesegmentStylingComponent]
    });
    fixture = TestBed.createComponent(LinesegmentStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

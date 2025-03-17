import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGapComponent } from './custom-gap.component';

describe('CustomGapComponent', () => {
  let component: CustomGapComponent;
  let fixture: ComponentFixture<CustomGapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomGapComponent]
    });
    fixture = TestBed.createComponent(CustomGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

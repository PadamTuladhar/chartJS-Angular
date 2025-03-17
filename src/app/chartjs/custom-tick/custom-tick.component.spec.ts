import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTickComponent } from './custom-tick.component';

describe('CustomTickComponent', () => {
  let component: CustomTickComponent;
  let fixture: ComponentFixture<CustomTickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTickComponent]
    });
    fixture = TestBed.createComponent(CustomTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

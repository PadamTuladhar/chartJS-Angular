import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomScaleTitleComponent } from './custom-scale-title.component';

describe('CustomScaleTitleComponent', () => {
  let component: CustomScaleTitleComponent;
  let fixture: ComponentFixture<CustomScaleTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomScaleTitleComponent]
    });
    fixture = TestBed.createComponent(CustomScaleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

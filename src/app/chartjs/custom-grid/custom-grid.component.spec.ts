import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGridComponent } from './custom-grid.component';

describe('CustomGridComponent', () => {
  let component: CustomGridComponent;
  let fixture: ComponentFixture<CustomGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomGridComponent]
    });
    fixture = TestBed.createComponent(CustomGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

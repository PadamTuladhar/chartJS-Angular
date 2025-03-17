import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLineColorComponent } from './change-line-color.component';

describe('ChangeLineColorComponent', () => {
  let component: ChangeLineColorComponent;
  let fixture: ComponentFixture<ChangeLineColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeLineColorComponent]
    });
    fixture = TestBed.createComponent(ChangeLineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

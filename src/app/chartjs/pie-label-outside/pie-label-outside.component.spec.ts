import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieLabelOutsideComponent } from './pie-label-outside.component';

describe('PieLabelOutsideComponent', () => {
  let component: PieLabelOutsideComponent;
  let fixture: ComponentFixture<PieLabelOutsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieLabelOutsideComponent]
    });
    fixture = TestBed.createComponent(PieLabelOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

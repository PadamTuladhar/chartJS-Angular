import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDatasetComponent } from './multiple-dataset.component';

describe('MultipleDatasetComponent', () => {
  let component: MultipleDatasetComponent;
  let fixture: ComponentFixture<MultipleDatasetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleDatasetComponent]
    });
    fixture = TestBed.createComponent(MultipleDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

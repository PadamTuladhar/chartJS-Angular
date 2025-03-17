import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructureFunctionComponent } from './datastructure-function.component';

describe('DatastructureFunctionComponent', () => {
  let component: DatastructureFunctionComponent;
  let fixture: ComponentFixture<DatastructureFunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatastructureFunctionComponent]
    });
    fixture = TestBed.createComponent(DatastructureFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

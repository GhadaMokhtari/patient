import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationPatientComponent } from './observation-patient.component';

describe('ObservationPatientComponent', () => {
  let component: ObservationPatientComponent;
  let fixture: ComponentFixture<ObservationPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

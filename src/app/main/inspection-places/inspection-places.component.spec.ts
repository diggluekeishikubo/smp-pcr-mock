import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionPlacesComponent } from './inspection-places.component';

describe('InspectionPlacesComponent', () => {
  let component: InspectionPlacesComponent;
  let fixture: ComponentFixture<InspectionPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectionPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

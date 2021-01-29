import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsResultComponent } from './symptoms-result.component';

describe('SymptomsResultComponent', () => {
  let component: SymptomsResultComponent;
  let fixture: ComponentFixture<SymptomsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

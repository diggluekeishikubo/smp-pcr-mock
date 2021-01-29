import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSymptomComponent } from './record-symptom.component';

describe('RecordSymptomComponent', () => {
  let component: RecordSymptomComponent;
  let fixture: ComponentFixture<RecordSymptomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordSymptomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

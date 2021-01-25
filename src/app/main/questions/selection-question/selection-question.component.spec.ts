import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionQuestionComponent } from './selection-question.component';

describe('SelectionQuestionComponent', () => {
  let component: SelectionQuestionComponent;
  let fixture: ComponentFixture<SelectionQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

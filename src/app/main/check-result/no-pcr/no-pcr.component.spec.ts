import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPcrComponent } from './no-pcr.component';

describe('NoPcrComponent', () => {
  let component: NoPcrComponent;
  let fixture: ComponentFixture<NoPcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

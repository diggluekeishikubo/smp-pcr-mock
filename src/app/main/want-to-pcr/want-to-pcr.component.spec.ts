import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToPcrComponent } from './want-to-pcr.component';

describe('WantToPcrComponent', () => {
  let component: WantToPcrComponent;
  let fixture: ComponentFixture<WantToPcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToPcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantToPcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

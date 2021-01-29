import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedPcrComponent } from './need-pcr.component';

describe('NeedPcrComponent', () => {
  let component: NeedPcrComponent;
  let fixture: ComponentFixture<NeedPcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedPcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedPcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

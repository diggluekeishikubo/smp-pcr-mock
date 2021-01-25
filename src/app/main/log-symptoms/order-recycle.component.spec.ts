import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRecycleComponent } from './order-recycle.component';

describe('OrderRecycleComponent', () => {
  let component: OrderRecycleComponent;
  let fixture: ComponentFixture<OrderRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderRecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

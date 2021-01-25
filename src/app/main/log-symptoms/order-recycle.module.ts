import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRecycleRoutingModule } from './order-recycle-routing.module';
import { OrderRecycleComponent } from './order-recycle.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [OrderRecycleComponent],
  imports: [
    CommonModule,
    OrderRecycleRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class OrderRecycleModule { }

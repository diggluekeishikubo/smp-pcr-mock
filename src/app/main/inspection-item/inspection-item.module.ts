import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionItemRoutingModule } from './inspection-item-routing.module';
import { InspectionItemComponent } from './inspection-item.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [InspectionItemComponent],
  imports: [
    CommonModule,
    InspectionItemRoutingModule,
    MatButtonModule
  ]
})
export class InspectionItemModule { }

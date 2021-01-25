import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionPlacesRoutingModule } from './inspection-places-routing.module';
import { InspectionPlacesComponent } from './inspection-places.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [InspectionPlacesComponent],
  imports: [
    CommonModule,
    InspectionPlacesRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class InspectionPlacesModule { }

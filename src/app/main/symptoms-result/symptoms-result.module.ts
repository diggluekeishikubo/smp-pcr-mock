import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymptomsResultRoutingModule } from './symptoms-result-routing.module';
import { SymptomsResultComponent } from './symptoms-result.component';
import { PositiveComponent } from './positive/positive.component';
import { NegativeComponent } from './negative/negative.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SymptomsResultComponent, PositiveComponent, NegativeComponent],
  imports: [
    CommonModule,
    SymptomsResultRoutingModule,
    MatButtonModule
  ]
})
export class SymptomsResultModule { }

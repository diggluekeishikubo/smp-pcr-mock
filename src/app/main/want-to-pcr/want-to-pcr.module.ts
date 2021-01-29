import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantToPcrRoutingModule } from './want-to-pcr-routing.module';
import { WantToPcrComponent } from './want-to-pcr.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [WantToPcrComponent],
  imports: [
    CommonModule,
    WantToPcrRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class WantToPcrModule { }

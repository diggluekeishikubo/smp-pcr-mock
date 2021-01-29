import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckResultRoutingModule } from './check-result-routing.module';
import { CheckResultComponent } from './check-result.component';
import { NeedPcrComponent } from './need-pcr/need-pcr.component';
import { NoPcrComponent } from './no-pcr/no-pcr.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CheckResultComponent, NeedPcrComponent, NoPcrComponent],
  imports: [
    CommonModule,
    CheckResultRoutingModule,
    MatButtonModule
  ]
})
export class CheckResultModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraceRoutingModule } from './trace-routing.module';
import { TraceComponent } from './trace.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [TraceComponent],
    imports: [
        CommonModule,
        TraceRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule
    ]
})
export class TraceModule { }

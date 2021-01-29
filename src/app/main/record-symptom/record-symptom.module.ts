import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordSymptomRoutingModule } from './record-symptom-routing.module';
import { RecordSymptomComponent } from './record-symptom.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ RecordSymptomComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecordSymptomRoutingModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class RecordSymptomModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordSymptomComponent } from './record-symptom.component';

const routes: Routes = [
  {path: '', component: RecordSymptomComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RecordSymptomRoutingModule {
}

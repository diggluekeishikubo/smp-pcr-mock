import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionPlacesComponent } from './inspection-places.component';

const routes: Routes = [
  {path: '', component: InspectionPlacesComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InspectionPlacesRoutingModule {
}

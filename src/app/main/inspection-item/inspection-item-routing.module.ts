import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionItemComponent } from './inspection-item.component';

const routes: Routes = [
  {path: '', component: InspectionItemComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InspectionItemRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymptomsResultComponent } from './symptoms-result.component';
import { PositiveComponent } from './positive/positive.component';
import { NegativeComponent } from './negative/negative.component';

const routes: Routes = [
  {
    path: '', component: SymptomsResultComponent, children: [
      {path: 'positive', component: PositiveComponent},
      {path: 'negative', component: NegativeComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SymptomsResultRoutingModule {
}

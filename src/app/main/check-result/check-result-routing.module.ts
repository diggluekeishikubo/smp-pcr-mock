import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckResultComponent } from './check-result.component';
import { NeedPcrComponent } from './need-pcr/need-pcr.component';
import { NoPcrComponent } from './no-pcr/no-pcr.component';

const routes: Routes = [
  {
    path: '', component: CheckResultComponent, children: [
      {path: 'need', component: NeedPcrComponent},
      {path: 'no', component: NoPcrComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CheckResultRoutingModule {
}

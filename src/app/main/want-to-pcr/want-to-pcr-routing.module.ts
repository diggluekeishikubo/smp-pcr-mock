import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WantToPcrComponent } from './want-to-pcr.component';

const routes: Routes = [
  {path: '', component: WantToPcrComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class WantToPcrRoutingModule {
}

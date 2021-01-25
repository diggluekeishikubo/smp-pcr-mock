import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecycleComponent } from './recycle.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: RecycleComponent},
  {path: ':id', component: DetailComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RecycleRoutingModule {
}

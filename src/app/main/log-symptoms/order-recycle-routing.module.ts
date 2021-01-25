import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderRecycleComponent } from './order-recycle.component';

const routes: Routes = [
  {path: "", component: OrderRecycleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRecycleRoutingModule { }

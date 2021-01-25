import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { mainUrls } from './main-urls';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {
        path: mainUrls[ 0 ],
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: mainUrls[ 1 ],
        loadChildren: () => import('./log-symptoms/order-recycle.module').then(m => m.OrderRecycleModule)
      },
      {
        path: 'camera',
        loadChildren: () => import('./camera/camera.module').then(m => m.CameraModule)
      },
      {
        path: mainUrls[ 2 ],
        loadChildren: () => import('./question-answers/recycle.module').then(m => m.RecycleModule)
      },
      {
        path: mainUrls[ 3 ],
        loadChildren: () => import('./bulletin-board/shops.module').then(m => m.ShopsModule)
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {
}

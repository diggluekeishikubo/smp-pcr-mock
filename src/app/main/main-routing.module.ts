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
        path: 'check-result',
        loadChildren: () => import('./check-result/check-result.module').then(m => m.CheckResultModule)
      },
      {
        path: 'symptoms-result',
        loadChildren: () => import('./symptoms-result/symptoms-result.module').then(m => m.SymptomsResultModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)
      },
      {
        path: 'inspection-places',
        loadChildren: () => import('./inspection-places/inspection-places.module').then(m => m.InspectionPlacesModule)
      },
      {
        path: 'inspection-item',
        loadChildren: () => import('./inspection-item/inspection-item.module').then(m => m.InspectionItemModule)
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

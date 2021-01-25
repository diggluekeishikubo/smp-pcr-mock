import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LogoutButtonComponent } from './main-header/logout-button/logout-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HeaderLogoComponent } from './main-header/header-logo/header-logo.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MainComponent, MainHeaderComponent, LogoutButtonComponent, MainFooterComponent, HeaderLogoComponent ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MainModule {
}

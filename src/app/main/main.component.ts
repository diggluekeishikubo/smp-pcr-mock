import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  template: `
    <div class="view-container">
      <app-main-header></app-main-header>
      <div class="main-container">
        <router-outlet></router-outlet>
      </div>
      <app-main-footer></app-main-footer>
    </div>
  `,
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {

  constructor(
    private a: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.a.logout();
  }
}

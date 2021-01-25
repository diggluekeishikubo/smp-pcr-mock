import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  template: `
    <mat-toolbar color="primary" class="main-header">
      <div class="logo-container">
        <app-header-logo></app-header-logo>
      </div>
      <div class="action-group">
        <app-logout-button></app-logout-button>
      </div>
    </mat-toolbar>
  `,
  styleUrls: [ './main-header.component.scss' ]
})
export class MainHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

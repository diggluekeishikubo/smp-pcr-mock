import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  template: `
    <a mat-icon-button routerLink="/home">
      <mat-icon aria-hidden="false" aria-label="Example home icon">home</mat-icon>
    </a>
  `,
  styleUrls: [ './header-logo.component.scss' ]
})
export class HeaderLogoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

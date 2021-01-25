import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="main-title">コロナの心配があるかたはこちらから</h1>
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center">
      <a class="button" mat-flat-button color="primary" routerLink="/order-recycle">問診を受けて<br>検査の必要性を確認する</a>
      <a class="button" mat-flat-button color="primary" routerLink="/order-recycle">PCR検査を受けたい</a>
    </div>
  `,
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

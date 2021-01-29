import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-recycle',
  template: `
    <h1 class="main-title">症状を記録して経過を見守りましょう</h1>
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center">
      <a class="button" mat-flat-button color="primary" routerLink="/record-symptoms">症状の経過を記録する</a>
      <a class="button" mat-flat-button color="primary" routerLink="/questions/8">PCR検査の結果を入力する</a>
      <a class="button" mat-flat-button color="primary" routerLink="/order-recycle">パルスオキシメーターの結果を入力する</a>
    </div>
  `,
  styleUrls: [ './order-recycle.component.scss' ]
})
export class OrderRecycleComponent implements OnInit {

  camera = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(v => {
      const query = v.get('q');
      this.camera = query === 'true';
    });
  }

}

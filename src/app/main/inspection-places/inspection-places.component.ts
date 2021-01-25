import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspection-places',
  template: `
    <h2 style="text-align: center">あなたの近くの検査所です</h2>
    <mat-card class="card" *ngFor="let place of places">
      <p class="place-title">{{place.title}}</p>
      <p class="description">受付時間: 8:00 ~ 18:00 定休日: 月 水</p>
      <p class="address">{{place.address}}</p>
      <p class="tel">{{place.tel}}</p>
      <a class="button" color="primary" mat-raised-button>予約画面へ</a>
    </mat-card>
  `,
  styleUrls: [ './inspection-places.component.scss' ]
})
export class InspectionPlacesComponent implements OnInit {

  places = [
    {title: '秋葉原一丁目検査所', address: '東京都秋葉原一丁目 xxxxx', tel: 'xxx-xxxx-xxxx'},
    {title: '秋葉原三丁目検査所', address: '東京都秋葉原三丁目 xxxxx', tel: 'xxx-xxxx-xxxx'},
    {title: '神田一丁目検査所', address: '東京都神田一丁目 xxxxx', tel: 'xxx-xxxx-xxxx'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

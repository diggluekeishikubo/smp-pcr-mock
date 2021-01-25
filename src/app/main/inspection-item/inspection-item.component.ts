import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspection-item',
  template: `
    <div class="container">
      <p>以下の住所にPCR検査キッドを送りします。<br>よろしいですか？</p>
      <small>住所: 東京都秋葉原一丁目 xxx-xxx-xxx ◯◯◯様</small>
      <br>
      <a color="primary" mat-raised-button>注文する</a>
    </div>
  `,
  styleUrls: [ './inspection-item.component.scss' ]
})
export class InspectionItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

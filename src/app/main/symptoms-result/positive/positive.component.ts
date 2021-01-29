import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positive',
  template: `
    <h2 class="title">お願い</h2>
    <ol>
      <li>外出は控えて、学校や会社はやすんでください。</li>
      <li>症状が出たら、かかりつけ医等、身近な医療機関に事前に電話で相談してください。</li>
      <li>以下の条件に当てはまる方は、すぐに業相談ください。</li>
      <small>・息苦しさ（呼吸困難）、強いだるさ（倦怠感）、高熱等の強い症状のいずれかがある場合</small>
    </ol>
    <div class="button-container">
      <button mat-raised-button color="primary"><span style="word-break: break-all">近隣の受診・相談センターに電話する</span></button>
    </div>
  `,
  styleUrls: [ './positive.component.scss' ]
})
export class PositiveComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

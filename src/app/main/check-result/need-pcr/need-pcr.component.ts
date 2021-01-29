import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-need-pcr',
  template: `
    <h2 class="title">PCR検査の必要があります。</h2>
    <p>コロナの可能性があります。PCR検査を受診することをお勧めします。</p>
    <ol>
      <li>外出は控えて、学校や会社はやすんでください。</li>
      <li>症状が出たら、かかりつけ医等、身近な医療機関に事前に電話で相談してください。</li>
      <li>以下の条件に当てはまる方は、すぐに業相談ください。</li>
      <small>・息苦しさ（呼吸困難）、強いだるさ（倦怠感）、高熱等の強い症状のいずれかがある場合</small>
    </ol>
    <div class="button-container">
      <button mat-raised-button color="primary"><span style="word-break: break-all">診療所を探す</span></button>
    </div>
    <div class="button-container">
      <button mat-raised-button color="primary"><span style="word-break: break-all">自宅でPCR検査をする</span></button>
    </div>
  `,
  styleUrls: [ './need-pcr.component.scss' ]
})
export class NeedPcrComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

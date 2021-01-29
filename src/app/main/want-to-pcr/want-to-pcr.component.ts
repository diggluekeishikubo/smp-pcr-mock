import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-want-to-pcr',
  template: `
    <h1 class="question-title">どちらで検査を受けますか？</h1>
    <mat-card>
      <div class="selection">
        <h2 style="text-align: center; font-size: 1rem">近くの衛生検査所で受けたい方へ</h2>
        <p>検査所は非常に混雑しています。症状が軽い場合は自宅で検査することも可能です。
          また、検査所の検査では1万円程度の費用がかかります。緊急で無い場合は自宅検査キットの利用をお勧めします。</p>
        <div style="text-align: center">
          <a routerLink="/questions/2" mat-raised-button color="primary">検査所で検査する</a>
        </div>
      </div>
    </mat-card>
    <mat-card>
      <div class="selection">
        <h2 style="text-align: center; font-size: 1rem">自宅で受けたい方へ</h2>
        <p>自宅検査キットで簡易に安く検査が受けられます。しかし、検査の精度は検査所で受けた方が正確です。重要な予定が控えている場合などは検査所での検査をお勧めします。</p>
        <div style="text-align: center">
          <a routerLink="/questions/5" mat-raised-button color="primary">自宅で検査する</a>
        </div>
      </div>
    </mat-card>
  `,
  styleUrls: [ './want-to-pcr.component.scss' ]
})
export class WantToPcrComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

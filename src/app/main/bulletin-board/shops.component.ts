import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  template: `
    <header>
      <div class="search-field-container">
        <mat-form-field>
          <input matInput type="search" placeholder="検索する">
        </mat-form-field>
        <button mat-icon-button>
          <mat-icon>search</mat-icon>
        </button>
      </div>
    </header>
    <h1 class="main-title">経験をシェアしましょう</h1>
    <p style="text-align: center">困ったことや役に立ったことなどをシェアしましょう。あなたの体験が誰かの役に立ちます。</p>
    <mat-card class="example-card" *ngFor="let c of comments">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{c.title}}</mat-card-title>
        <mat-card-subtitle>{{c.name}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{c.comment}}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>いいね</button>
        <button mat-button>コメントをする</button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: [ './shops.component.scss' ]
})
export class ShopsComponent implements OnInit {

  comments = [
    {
      title: '家族がいるかたでも気をつけた方がよいです',
      name: 'Aさん40歳男性',
      comment: '「症状は軽かったのですが、家族全員が濃厚接触者となり息子は中学入試を受けられなくなりました。感染率が低くても家族に大きな影響を与えるので、特に大事な時期は外出を控えるべきと思いました。みなさんも気を付けてください」\n'
    },
    {
      title: '診断を受けてみると',
      name: 'Cさん20歳男性。。',
      comment: '「熱が出たので検査を受けました。はじめは検査をどうやって受ければ良いかわからないと思うので、とりあえず”検査を受けるべきか問診を受けてみる”ボタンを押せば診断してもらえます。」'
    },
    {
      title: '膝が5日間痛むのですが、PCR検査を受けた方がよいでしょうか？',
      name: 'Cさん20歳男性。',
      comment: '「膝の関節が痛むのですが、同じ症状の人いますか？検査するか迷ってます。」'
    },
    {
      title: '家族がいるかたでも気をつけた方がよいです',
      name: 'Aさん40歳男性',
      comment: '「症状は軽かったのですが、家族全員が濃厚接触者となり息子は中学入試を受けられなくなりました。感染率が低くても家族に大きな影響を与えるので、特に大事な時期は外出を控えるべきと思いました。みなさんも気を付けてください」\n'
    },
    {
      title: '診断を受けてみると',
      name: 'Cさん20歳男性。。',
      comment: '「熱が出たので検査を受けました。はじめは検査をどうやって受ければ良いかわからないと思うので、とりあえず”検査を受けるべきか問診を受けてみる”ボタンを押せば診断してもらえます。」'
    },
    {
      title: '膝が5日間痛むのですが、PCR検査を受けた方がよいでしょうか？',
      name: 'Cさん20歳男性。',
      comment: '「膝の関節が痛むのですが、同じ症状の人いますか？検査するか迷ってます。」'
    },
    {
      title: '家族がいるかたでも気をつけた方がよいです',
      name: 'Aさん40歳男性',
      comment: '「症状は軽かったのですが、家族全員が濃厚接触者となり息子は中学入試を受けられなくなりました。感染率が低くても家族に大きな影響を与えるので、特に大事な時期は外出を控えるべきと思いました。みなさんも気を付けてください」\n'
    },
    {
      title: '診断を受けてみると',
      name: 'Cさん20歳男性。。',
      comment: '「熱が出たので検査を受けました。はじめは検査をどうやって受ければ良いかわからないと思うので、とりあえず”検査を受けるべきか問診を受けてみる”ボタンを押せば診断してもらえます。」'
    },
    {
      title: '膝が5日間痛むのですが、PCR検査を受けた方がよいでしょうか？',
      name: 'Cさん20歳男性。',
      comment: '「膝の関節が痛むのですが、同じ症状の人いますか？検査するか迷ってます。」'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

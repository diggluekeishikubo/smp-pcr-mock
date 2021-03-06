import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-pcr',
  template: `
    <h2 class="title">PCR検査の必要はりません。</h2>
    <p>検査はしなくても問題はありませんが、また何か症状が出たらもう一度診断を受けてみてください。</p>
    <ol>
      <li>外出しても問題ありませんが、引き続き感染対策を行ってください。</li>
      <li>引き続き症状が治まるまでは経過を記録してください。</li>
      <li>検査後3日間、症状が治まらない場合は再度検査を受けてください。</li>
      <small>症状が治まったら記録を終了しても大丈夫です。</small>
    </ol>
    <div class="button-container">
      <button routerLink="/home" mat-raised-button color="primary"><span style="word-break: break-all">TOPヘ</span></button>
    </div>
    <div class="button-container">
      <button routerLink="/log-symptoms" mat-raised-button color="accent"><span style="word-break: break-all">症状の記録を記録する</span></button>
    </div>
  `,
  styleUrls: ['./no-pcr.component.scss']
})
export class NoPcrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

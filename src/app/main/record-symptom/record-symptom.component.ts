import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-symptom',
  template: `
    <h2>今日の症状を教えてください。</h2>
    <div style="padding-left: 1rem">
      <mat-form-field class="from-control">
        <input placeholder="現在の体温" matInput type="number">
      </mat-form-field>
      <mat-radio-group class="form-group" aria-label="Select an option">
        <p class="para">関節の痛み</p>
        <mat-radio-button class="button" value="1">通常</mat-radio-button>
        <mat-radio-button class="button" value="2">違和感がある</mat-radio-button>
      </mat-radio-group>
      <mat-radio-group class="form-group" aria-label="Select an option">
        <p class="para">味覚の異常</p>
        <mat-radio-button class="button" value="1">あり</mat-radio-button>
        <mat-radio-button class="button" value="2">なし</mat-radio-button>
      </mat-radio-group>
      <mat-radio-group class="form-group" aria-label="Select an option">
        <p class="para">嗅覚の異常</p>
        <mat-radio-button class="button" value="1">あり</mat-radio-button>
        <mat-radio-button class="button" value="2">なし</mat-radio-button>
      </mat-radio-group>
      <mat-form-field class="from-control">
        <input placeholder="その他の症状" matInput type="text">
      </mat-form-field>
    </div>
    <div style="text-align: center">
      <button mat-raised-button color="primary">結果を記録する</button>
    </div>
  `,
  styleUrls: [ './record-symptom.component.scss' ]
})
export class RecordSymptomComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

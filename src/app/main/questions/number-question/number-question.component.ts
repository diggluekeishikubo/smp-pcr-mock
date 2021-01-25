import { Component, Input, OnInit } from '@angular/core';
import { NumberQuestion } from '../../../services/questions.service';

@Component({
  selector: 'app-number-question',
  template: `
    <ng-container *ngIf="question">
      <mat-form-field>
        <input matInput type="number" [placeholder]="question.placeholder">
      </mat-form-field>
      <div>
        <a [routerLink]="question.url" mat-raised-button color="primary">{{question.label}}</a>
      </div>
    </ng-container>
  `,
  styleUrls: [ './number-question.component.scss', '../questions.component.scss' ]
})
export class NumberQuestionComponent implements OnInit {
  @Input() question?: NumberQuestion;

  constructor() {
  }

  ngOnInit(): void {
  }

}

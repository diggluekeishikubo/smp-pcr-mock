import { Component, Input, OnInit } from '@angular/core';
import { SelectionQuestion } from '../../../services/questions.service';

@Component({
  selector: 'app-selection-question',
  template: `
    <ng-container *ngIf="question">
      <mat-form-field>
        <mat-select [value]="question.selections[0].value">
          <mat-option *ngFor="let selection of question.selections"
                      [value]="selection.value">{{selection.label}}</mat-option>
        </mat-select>
      </mat-form-field>
      <div>
        <a [routerLink]="question.url" mat-raised-button color="primary">{{question.label}}</a>
      </div>
    </ng-container>
  `,
  styleUrls: [ './selection-question.component.scss', '../questions.component.scss' ]
})
export class SelectionQuestionComponent implements OnInit {
  @Input() question?: SelectionQuestion;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ChoiceQuestion } from '../../../services/questions.service';

@Component({
  selector: 'app-choice-question',
  template: `
    <ng-container *ngIf="question">
      <div class="selection" *ngFor="let selection of question.choices">
        <p>{{selection.explanation}}</p>
        <a [routerLink]="selection.url" mat-raised-button color="primary">{{selection.label}}</a>
      </div>
    </ng-container>
  `,
  styleUrls: [ './choice-question.component.scss', '../questions.component.scss' ]
})
export class ChoiceQuestionComponent implements OnInit {

  @Input() question?: ChoiceQuestion;

  constructor() {
  }

  ngOnInit(): void {
  }

}

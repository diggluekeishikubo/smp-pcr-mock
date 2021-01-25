import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Question, QuestionsService } from '../../services/questions.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  template: `
    <div class="container">
      <ng-container *ngIf="question$ | async as question">
        <h1 class="question-title">{{question.title}}</h1>
        <ng-container [ngSwitch]="question.type">
          <app-choice-question [question]="question" *ngSwitchCase="'choice'"></app-choice-question>
          <app-selection-question [question]="question" *ngSwitchCase="'selection'"></app-selection-question>
          <app-number-question [question]="question" *ngSwitchCase="'number'"></app-number-question>
        </ng-container>
      </ng-container>
    </div>
  `,
  styleUrls: [ './questions.component.scss' ]
})
export class QuestionsComponent implements OnInit {

  question$?: Observable<Question>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
  }

  getQuestion(): Observable<Question> {
    return this.getQID().pipe(
      mergeMap(id => {
        return this.questionsService.getById(id);
      })
    );
  }

  ngOnInit(): void {
    this.question$ = this.getQuestion();
  }

  private getQID(): Observable<string> {
    return this.activatedRoute.paramMap.pipe(
      map(p => {
        return p.get('qid') as string;
      })
    );
  }

}

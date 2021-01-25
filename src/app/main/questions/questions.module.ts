import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ChoiceQuestionComponent } from './choice-question/choice-question.component';
import { NumberQuestionComponent } from './number-question/number-question.component';
import { SelectionQuestionComponent } from './selection-question/selection-question.component';


@NgModule({
  declarations: [QuestionsComponent, ChoiceQuestionComponent, NumberQuestionComponent, SelectionQuestionComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class QuestionsModule { }

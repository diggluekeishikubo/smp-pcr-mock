import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class ChoiceQuestion {


  type = 'choice';

  constructor(
    public choices: {
      url: string;
      explanation?: string;
      label: string;
    }[],
    public id: string,
    public title: string,
  ) {
  }
}

export class SelectionQuestion {
  type = 'selection';

  constructor(
    public selections: { value: any, label: string }[],
    public id: string,
    public title: string,
    public url: string,
    public label: string) {
  }
}

export class NumberQuestion {
  type = 'number';

  constructor(
    public id: string,
    public   title: string,
    public   type: 'number',
    public   placeholder: string,
    public   url: string,
    public   label: string
  ) {
  }
}

export type Question = ChoiceQuestion | SelectionQuestion | NumberQuestion;

const questions: Question[] = [
  {
    id: '1',
    title: 'どちらで検査されますか？',
    choices: [
      {
        url: '/questions/2', explanation: '近くの衛生検査所で受けたい方はこちら', label: '検査所で検査する'
      },
      {
        url: '/questions/5', explanation: '自宅で受けたい方はこちら', label: '自宅で検査する'
      }
    ],
    type: 'choice'
  }, {
    id: '2',
    title: '住所を入力してください',
    type: 'selection',
    label: '次へ',
    url: '/questions/3',
    selections: [
      {
        value: '1',
        label: '北海道'
      },
      {
        value: '2',
        label: '青森'
      },
      {
        value: '3',
        label: '東京都'
      },
    ]
  },
  {
    id: '3',
    title: '性別を教えてください',
    type: 'selection',
    url: '/questions/4',
    label: '次へ',
    selections: [
      {
        value: 0,
        label: '女性',
      },
      {
        value: 1,
        label: '男性'
      },
      {
        value: 2,
        label: '答えない'
      }
    ]
  },
  {
    id: '4',
    title: '年齢を教えてください',
    type: 'number',
    url: '/inspection-places',
    label: '次へ',
    placeholder: '年齢を入力'
  }, {
    id: '5',
    title: '住所を入力してください',
    type: 'selection',
    label: '次へ',
    url: '/questions/6',
    selections: [
      {
        value: '1',
        label: '北海道'
      },
      {
        value: '2',
        label: '青森'
      },
      {
        value: '3',
        label: '東京都'
      },
    ]
  },
  {
    id: '6',
    title: '性別を教えてください',
    type: 'selection',
    url: '/questions/7',
    label: '次へ',
    selections: [
      {
        value: 0,
        label: '女性',
      },
      {
        value: 1,
        label: '男性'
      },
      {
        value: 2,
        label: '答えない'
      }
    ]
  },
  {
    id: '7',
    title: '年齢を教えてください',
    type: 'number',
    url: '/inspection-item',
    label: '次へ',
    placeholder: '年齢を入力'
  },

];

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() {
  }

  list(): Observable<Question[]> {
    return of(questions);
  }

  getById(id: string): Observable<Question> {
    return this.list().pipe(
      map(qs => {
        return qs.find(q => q.id === id) as Question;
      })
    );
  }
}

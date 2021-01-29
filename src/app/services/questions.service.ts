import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class ChoiceQuestion {

  type = 'choice';

  constructor(
    public id: string,
    public title: string,
    public choices: {
      url: string;
      explanation?: string;
      label: string;
    }[],
  ) {
  }
}

export class SelectionQuestion {
  type = 'selection';

  constructor(
    public id: string,
    public title: string,
    public url: string,
    public label: string,
    public selections: { value: any, label: string }[],
  ) {
  }
}

export class NumberQuestion {
  type = 'number';

  constructor(
    public id: string,
    public   title: string,
    public   url: string,
    public   label: string,
    public   placeholder: string
  ) {
  }
}

export type Question = ChoiceQuestion | SelectionQuestion | NumberQuestion;

const questions: Question[] = [
  new ChoiceQuestion('1', 'どちらで検査されますか？', [
    {
      url: '/questions/2', explanation: '近くの衛生検査所で受けたい方はこちら', label: '検査所で検査する'
    },
    {
      url: '/questions/5', explanation: '自宅で受けたい方はこちら', label: '自宅で検査する'
    }
  ]),
  new SelectionQuestion('2', '住所を入力してください', '/questions/3', '次へ', [
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
  ]),
  new SelectionQuestion('3', '性別を教えてください', '/questions/4', '次へ', [
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
  ]),
  new NumberQuestion('4', '年齢を教えてください', '/inspection-places', '次へ', '年齢を入力'),
  new SelectionQuestion('5', '住所を入力してください', '/questions/6', '次へ', [
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
  ]),
  new SelectionQuestion('6', '性別を教えてください', '/questions/7', '次へ', [
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
  ]),
  new NumberQuestion('7', '年齢を教えてください', '/inspection-item', '次へ', '年齢を入力'),
  new ChoiceQuestion('8', 'PCR検査の結果を教えてください', [
    {
      url: '/symptoms-result/positive', explanation: '', label: '陽性'
    },
    {
      url: '/symptoms-result/negative', explanation: '', label: '陰性'
    }
  ]),
  new ChoiceQuestion('9', 'PCR検査の必要か判定するための診断を開始します。', [
    {
      url: '/questions/10', explanation: '', label: '診断を開始する'
    },
    {
      url: '/home', explanation: '', label: 'TOPへ戻る'
    }
  ]),
  new ChoiceQuestion('10', '3日以内で37度以上の熱は出ましたか？', [
    {
      url: '/questions/11', explanation: '', label: 'はい'
    },
    {
      url: '/check-result/no', explanation: '', label: 'いいえ'
    }
  ]),
  new ChoiceQuestion('11', '熱は5日以上続いていますか？', [
    {
      url: '/questions/12', explanation: '', label: 'はい'
    },
    {
      url: '/check-result/no', explanation: '', label: 'いいえ'
    }
  ]),
  new ChoiceQuestion('12', '味覚や嗅覚に異常を感じますか？', [
    {
      url: '/check-result/need', explanation: '', label: 'はい'
    },
    {
      url: '/check-result/no', explanation: '', label: 'いいえ'
    }
  ]),
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

import { Injectable } from '@angular/core';

export interface Recycle {
  itemName: string;

  status: {
    place: string;
    state: string;
    code: number;
  };
  src: string;
  id: number;
}

const recycles: Recycle[] = [
  {
    id: 1,
    itemName: '', status: {
      place: 'ローソン秋葉原店回収ボックス',
      state: '写真確認中',
      code: 0,
    },
    src: '/assets/recycle/sample1.png'
  },
  {
    id: 2,
    itemName: '', status: {
      place: '秋葉原リサイクル素材回収所',
      state: '回収済',
      code: 1,
    },
    src: '/assets/recycle/sample2.png'
  },
  {
    id: 3,
    itemName: '', status: {
      place: '東京プラスチック加工センター',
      state: 'リサイクル中',
      code: 2
    },
    src: '/assets/recycle/sample3.png'
  },
  {
    id: 4,
    itemName: '', status: {
      place: 'ショップ店頭',
      state: 'リサイクル済',
      code: 3,
    },
    src: '/assets/recycle/sample1.png'
  }, {
    id: 5,
    itemName: '', status: {
      place: '秋葉原リサイクル素材回収所',
      state: '回収済',
      code: 1,
    },
    src: '/assets/recycle/sample2.png'
  },
  {
    id: 6,
    itemName: '', status: {
      place: '東京プラスチック加工センター',
      state: 'リサイクル中',
      code: 2
    },
    src: '/assets/recycle/sample3.png'
  },
];

@Injectable({
  providedIn: 'root'
})
export class RecycleService {

  constructor() {
  }

  list(): Recycle[] {
    return recycles;
  }

  get(id: number): Recycle {
    return this.list().find(i => i.id === id) as Recycle;
  }
}

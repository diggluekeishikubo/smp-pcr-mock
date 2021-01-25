import { Injectable } from '@angular/core';


export interface Item {
  itemName: string;
  detail: string;
  src: string;
  price: number;
};

const items: Item[] = [ {
  itemName: 'e.スポンジワイプ kata kata くま',
  src: '/assets/login/goods1.png',
  detail: 'プラスティックからつくられた靴です',
  price: 100
}, {
  itemName: 'e.スポンジワイプ kata kata かもめ',
  src: '/assets/login/goods2.png',
  detail: 'プラスティックからつくられた靴です',
  price: 100
}, {
  itemName: 'e.スポンジワイプ kata kata ねこ',
  src: '/assets/login/goods3.png',
  detail: 'プラスティックからつくられた靴です',
  price: 100
}, {
  itemName: 'e.スポンジワイプ kata kata くじら',
  src: '/assets/login/goods4.png',
  detail: 'プラスティックからつくられた靴です',
  price: 100
}, {
  itemName: '天然素材配合くらしのセット グリーン',
  src: '/assets/login/goods5.png',
  detail: 'プラスティックからつくられた靴です',
  price: 100
}, {
    itemName: '天然素材配合くらしのセット イエロー',
    src: '/assets/login/goods6.png',
    detail: 'プラスティックからつくられた靴です',
    price: 100
  },{
  itemName: 'マイクロファイバースポンジ 2枚セット A',
  src: '/assets/login/goods7.png',
  detail: 'プラスティックからつくられた靴です',
  price: 100
},
  {
    itemName: 'マイクロファイバースポンジ 2枚セット B',
    src: '/assets/login/goods8.png',
    detail: 'プラスティックからつくられた靴です',
    price: 100
  }, {
    itemName: 'crep ピクニックラグ 60 x 90cm イエロー',
    src: '/assets/login/goods9.png',
    detail: 'プラスティックからつくられた靴です',
    price: 100
  } ];

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() {
  }

  list(): Item[] {
    return items;
  }
}

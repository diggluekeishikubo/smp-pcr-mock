import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-shops',
  template: `
    <header>
      <div class="search-field-container">
        <mat-form-field>
          <input matInput type="search" placeholder="検索する">
        </mat-form-field>
        <button mat-icon-button>
          <mat-icon>search</mat-icon>
        </button>
      </div>
    </header>
    <h1 class="main-title">経験をシェアしましょう</h1>
    <p style="text-align: center">困ったことや役に立ったことなどをシェアしましょう。あなたの体験が誰かの役に立ちます。</p>
  `,
  styleUrls: [ './shops.component.scss' ]
})
export class ShopsComponent implements OnInit {
  constructor(
    private itemsService: ItemsService
  ) {
  }

  get items(): Item[] {
    return this.itemsService.list();
  }

  getItemDetail(item: { detail: string }): string {
    const length = item.detail.length;
    const suffix = 15 < length ? '...' : '';
    return item.detail.slice(0, 15) + suffix;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-trace',
  template: `
    <h2>あなたの漁網から作られた製品です。どのように加工されたか見てみましょう。</h2>
    <mat-card class="card" *ngFor="let item of items">
      <mat-card-header>
        <img mat-card-avatar class="example-header-image" [src]="item.src">
        <mat-card-title class="title">{{item.itemName}}</mat-card-title>
      </mat-card-header>
      <p>{{item.detail}}</p>
      <a href="https://traceability-plastic.web.app/items/0/trace" target="_blank" mat-raised-button color="primary">作られた過程を見てみる</a>
    </mat-card>
  `,
  styleUrls: [ './trace.component.scss' ]
})
export class TraceComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private itemsService: ItemsService
  ) {
  }

  ngOnInit(): void {
    this.items = this.itemsService.list();
  }

}

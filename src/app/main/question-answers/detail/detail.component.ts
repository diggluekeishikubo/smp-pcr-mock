import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recycle, RecycleService } from '../../../services/recycle.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  template: `
    <ng-container *ngIf="getRecycle() | async as recycle">
      <div style="height: 20rem;background-size: cover; background-position: center; background-image: url('{{recycle.src}}')"></div>
      <div class="heading">回収場所: {{recycle.status.place}}</div>
      <div class="heading">現在ステータス: {{recycle.status.state}}</div>
      <div [class.gray]="recycle.status.code < 0">
        <mat-card class="card">
          <mat-card-title>写真確認中</mat-card-title>
          <mat-card-content>
            <div>場所: N薬局秋葉原店</div>
          </mat-card-content>
        </mat-card>
      </div>
      <div [class.gray]="recycle.status.code < 1">
        <div class="arrow">↓</div>
        <mat-card class="card">
          <mat-card-title>回収済み</mat-card-title>
          <mat-card-content>
            <div>場所: 秋葉原資源回収センター</div>
          </mat-card-content>
        </mat-card>
      </div>
      <div [class.gray]="recycle.status.code < 2">
        <div class="arrow">↓</div>
        <mat-card class="card">
          <mat-card-title>リサイクル中</mat-card-title>
          <mat-card-content>
            <div>場所: 秋葉原リサイクルセンター</div>
          </mat-card-content>
        </mat-card>
      </div>
      <div [class.gray]="recycle.status.code < 3">
        <div class="arrow">↓</div>
        <mat-card class="card">
          <mat-card-title>リサイクル済み</mat-card-title>
          <mat-card-content>
            <div>リサイクル商品に生まれ変わりました</div>
          </mat-card-content>
        </mat-card>
      </div>
      <div style="margin: 3rem"></div>
    </ng-container>
  `,
  styleUrls: [ './detail.component.scss' ]
})
export class DetailComponent implements OnInit {

  recycle$?: Observable<Recycle>;
  id$?: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recycleService: RecycleService
  ) {
  }

  getRecycle(): Observable<Recycle> | undefined {
    return this.id$?.pipe(map(id => {
      return this.recycleService.get(Number(id));
    }));
  }

  ngOnInit(): void {
    this.id$ = this.activatedRoute.paramMap.pipe(
      map(param => {
        return param.get('id') as string;
      })
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Recycle, RecycleService } from '../../services/recycle.service';

@Component({
  selector: 'app-recycle',
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
    <h1 class="main-title">コロナ・検査に関する質問はこちらから</h1>
  `,
  styleUrls: [ './recycle.component.scss' ]
})
export class RecycleComponent implements OnInit {

  constructor(
    private recycleService: RecycleService
  ) {
  }

  get recycles(): Recycle[] {
    return this.recycleService.list();
  }

  ngOnInit(): void {
  }

}

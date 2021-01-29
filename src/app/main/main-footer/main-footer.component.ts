import { Component, OnInit } from '@angular/core';
import { mainUrls } from '../main-urls';

@Component({
  selector: 'app-main-footer',
  template: `
    <footer class="main-footer">
      <a *ngFor="let route of routes" class="icon" routerLinkActive="active" [routerLink]="route.url" mat-icon-button>
        <div>
          <mat-icon>{{route.icon}}</mat-icon>
        </div>
        <div class="icon-text">
          <span>{{route.text}}</span>
        </div>
      </a>
    </footer>
  `,
  styleUrls: [ './main-footer.component.scss' ]
})
export class MainFooterComponent implements OnInit {

  routes = [
    {
      url: '/' + mainUrls[ 0 ],
      icon: 'home',
      text: '検査'
    },
    {
      url: '/' + mainUrls[ 4 ],
      icon: 'show_chart',
      text: '体温チャート'
    },
    {
      url: '/' + mainUrls[ 1 ],
      icon: 'create',
      text: '経過記録'
    },
    {
      url: '/' + mainUrls[ 2 ],
      icon: 'question_answer',
      text: 'QA'
    },
    {
      url: '/' + mainUrls[ 3 ],
      icon: 'content_paste',
      text: '掲示板'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

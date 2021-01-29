import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-result',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./check-result.component.scss']
})
export class CheckResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

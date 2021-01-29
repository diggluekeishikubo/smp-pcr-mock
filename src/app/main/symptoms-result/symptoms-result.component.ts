import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms-result',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './symptoms-result.component.scss' ]
})
export class SymptomsResultComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

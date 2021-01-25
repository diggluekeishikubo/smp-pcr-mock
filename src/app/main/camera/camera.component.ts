import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  template: `
    <div class="container">
      <a [routerLink]="['/order-recycle']" [queryParams]="{q: true}">
        <img style="width: 100%; object-fit: contain" src="/assets/camera/sample.png">
      </a>
    </div>
  `,
  styleUrls: [ './camera.component.scss' ]
})
export class CameraComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

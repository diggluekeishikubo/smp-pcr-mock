import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-main-container">
      <div class="main-box">
        <img width="65" src="assets/corporate.png">
        <h1 class="main-title">コロナPCR検査アドバイザー</h1>
        <p>
          PCRの検査に関わる疑問を解消します。
        </p>
        <button (click)="login()" mat-raised-button color="primary">始めてみる</button>
      </div>
    </div>
  `,
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  imgs: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  login(): void {
    this.authService.login().subscribe(v => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit(): void {
  }

}

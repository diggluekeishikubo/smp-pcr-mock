import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  template: `
    <button mat-icon-button (click)="logout()">
      <mat-icon>exit_to_app</mat-icon>
    </button>
  `,
  styleUrls: [ './logout-button.component.scss' ]
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }

  ngOnInit(): void {

  }

}

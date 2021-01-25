import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() {
  }

  isLogin(): Observable<boolean> {
    // const result = localStorage.getItem('isLogin');
    const result = true;
    return of(!!result);
  }

  login(): Observable<null> {
    // localStorage.setItem('isLogin', 'login');
    return of(null);
  }

  logout(): Observable<any> {
    // localStorage.removeItem('isLogin');
    return of(null);
  }
}

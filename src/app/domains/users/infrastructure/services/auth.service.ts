import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'password') {
      const token = 'mock-jwt-token-12345';
      sessionStorage.setItem('token', token);
      return of(true).pipe(delay(100));
    } else {
      return of(false).pipe(delay(100));
    }
  }

  isAuthenticated() {
    return of(sessionStorage.getItem('token') !== null);
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}

import { Injectable } from '@angular/core';
import { userData } from 'app/mock/mock';
import { AccountType, IUserData } from 'app/core/interfaces/user';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  getUserData(): Observable<IUserData> {
    return of(userData).pipe(delay(100));
  }

  searchProduct(id: string): Observable<AccountType> {
    return of(userData.accounts[0]).pipe(delay(100));
  }
}

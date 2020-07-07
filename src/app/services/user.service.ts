import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = new BehaviorSubject(null);
  user$ = this.user.asObservable();
  constructor() {}

  setLoggedInUser(user) {
    user.timeStamp = new Date().getTime();
    if (localStorage.getItem('loggedInUser')) {
      localStorage.removeItem('loggedInUser');
    }
    localStorage.setItem('loggedInUser', user);
    this.user.next(user);
  }

  logout() {
    localStorage.clear();
  }
}

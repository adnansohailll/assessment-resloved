import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
const permissions = require('./permissions.json');

interface ICredentials {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userPermissions = new BehaviorSubject([]);
  private loggedIn = false;
  constructor(private router: Router) {}

  get permissions() {
    return this.userPermissions.asObservable();
  }

  get isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  login(credentials: ICredentials) {
    this.fakeLogin().subscribe((res) => {
      this.userPermissions.next(res.permissions);
      this.router.navigate(['admin']);
      this.loggedIn = true;

      localStorage.setItem('permissions', JSON.stringify(res.permissions));
      localStorage.setItem('user', JSON.stringify(credentials));

    });
  }

  private fakeLogin() {
    return of({ permissions });
  }
}

import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import SignInUpProcess from './components/Onboarding/SignInUpProcess';
import Banner from './components/Sidebar/Banner'
import useToken from './components/Onboarding/useToken'
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from './Environments/Environment';
import { map } from 'rxjs/operators';

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

class AuthenticationService extends Component {

  state = {
    tokenKey: 'currentUser',
    user: null,
    redirectUrl: null
}

/*constructor(http) {
  let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
  if (parsedToken) {
    const expires =
      new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
    if (expires) {
      localStorage.removeItem(this._tokenKey);
      parsedToken = null;
    }
  }
  this._user$ = new BehaviorSubject<string>(
    parsedToken && parsedToken.unique_name
  );
}*/
}

export default AuthenticationService;


/*
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post(
        `${environment.apiUrl}/account`,
        { email, password },
        { responseType: 'text' }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(email);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Observable<boolean> {
    return this.http
      .post(
        `${environment.apiUrl}/account/register`,
        {
          firstname,
          lastname,
          email,
          password,
          passwordConfirmation: password,
        },
        { responseType: 'text' }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(email);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      this._user$.next(null);
    }
  }

  checkUserNameAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(
      `${environment.apiUrl}/account/checkusername`,
      {
        params: { email },
      }
    );
  };
}
*/
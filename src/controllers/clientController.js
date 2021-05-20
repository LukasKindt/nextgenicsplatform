import { map } from 'rxjs/operators';
import { environment } from '../Environments/Environment';

export const checkUserName = async (email) => {
    var value;
    await fetch(environment.apiUrl + '/api/Client/checkusername?email=' + email)
    .then(res => res.json())
    .then((data) => {
        value = data
    })
    .catch(console.log)

    return value
}

export const getClients = async (name) => {
    var value = undefined
    await fetch(environment.apiUrl + '/api/Client/Clients?name=' + name)
    .then(res => res.json())
    .then((data) => {
      value = data
    })
    .catch(console.log)

    return value
}

export const getClientByEmail = async (email) => {
    var value;

    await fetch(environment.apiUrl + '/api/Client/' + email)
    .then(res => res.json())
    .then((data) => {
      value = data
    })
    .catch(console.log)

    return value
}

export const login = async (email, password) => {

  return fetch(environment.apiUrl + '/api/Client/Login', {
    method: 'POST',
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({ email: email, password:password })
  })
    .then(data => data.json())
    .then(        
      map((token) => {
      if (token) {
        /*localStorage.setItem(this._tokenKey, token);*/
        this._user$.next(email);
      }
    }))

    /*const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        })
    };

    var value;

    await fetch(environment.apiUrl + '/api/Client/Login', requestOptions).then(
        map((token) => {
            if (token) {
              localStorage.setItem(this._tokenKey, token);
              this._user$.next(email);
              value = true
            } else {
              value = false;
            }
          })
    );

    return value*/
  }

export const register = async (firstName, lastName, email, role) => {

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role
        })
    };

    var value;

    await fetch(environment.apiUrl + '/api/Client/Register', requestOptions).then(
        map((token) => {
            if (token) {
              localStorage.setItem(this._tokenKey, token);
              this._user$.next(email);
              value = true;
            } else {
              value = false;
            }
          })
    );

    return value
  }

  export const logout = () => {
    if (this._user$.getValue()) {
      localStorage.removeItem('currentUser');
      this._user$.next(null);
    }
  }
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { BASE_URL } from './app.constants';

@Injectable()
export class WebService {
  private cachedToken: string = "";
  private isAuthenticated: boolean = false;
  private email: string = "";
  private id: string = "";
  private token: string = "";

  constructor(private http: Http) {}

  login(token: string, email: string, password: string) {
    const body = {
      token,
      email,
      password,
    };

    return this.http.post(BASE_URL+'/login', body)
              .toPromise()
              .then(response => response.json())
              .catch(error => console.log(error));
  }

  setToken(token: string) {
    this.cachedToken = token;
  }

  setAuthenticated(authenticated: boolean) {
    this.isAuthenticated = authenticated;
  }

  setId(id: string) {
    this.id = id;
  }

  getEvents() {
    let headers = new Headers();

    headers.append('Authorization', 'Bearer '+this.cachedToken);

    return this.http.get(BASE_URL+'/events', { headers: headers })
              .toPromise()
              .then(response => response.json())
              .catch(error => console.log('DIE: '+error));
  }
}

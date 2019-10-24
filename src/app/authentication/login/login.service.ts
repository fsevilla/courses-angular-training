import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(credentials): Promise<any> {
    const url = environment.apiUrl + 'login';
    return this.httpClient.post(url, credentials).toPromise();
  }

  getUserData(tokenStr): Promise<any> {
    const token = JSON.parse(tokenStr);
    const url = environment.apiUrl + 'me';
    return this.httpClient.post(url, token).toPromise();
  }

  loginAsObservable(credentials): Observable<any> {
    const url = environment.apiUrl + 'login';
    return this.httpClient.post(url, credentials);
  }
}

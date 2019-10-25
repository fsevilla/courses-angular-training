import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from 'src/app/authentication/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  get(url): Observable<any> {
    let token = this.sessionService.getSessionToken();
    
    let httpHeaders:HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    });

    return this.httpClient.get(url, {
      headers: httpHeaders
    });
  }
}

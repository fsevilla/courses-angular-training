import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbcService {

  protected endpoint:string;

  constructor(private baseHttp:BaseHttpService) { }

  protected transformData(data) {
    return data;
  }

  get() {
    const url = environment.dataApi + this.endpoint;
    return this.baseHttp.get(url).pipe(
      map((data) => {
        return this.transformData(data);
      })
    ).toPromise();
  }

  getElement(endpoint:string, id:number) {
    const url = environment.dataApi + endpoint + '/' + id;
    return this.baseHttp.get(url).toPromise();
  }
}

import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { BaseHttpService } from './../../shared/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private baseHttp: BaseHttpService
  ) { }

  getStudents():Promise<any> {
    const url = environment.dataApi + 'users';
    return this.baseHttp.get(url).toPromise();;
  }

  getStudentData(studentId:number):Promise<any> {
    const url = environment.dataApi + 'users/' + studentId;
    return this.baseHttp.get(url).toPromise();
  }
}

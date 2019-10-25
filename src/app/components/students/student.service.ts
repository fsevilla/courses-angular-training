import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  getStudents():Promise<any> {
    const url = environment.dataApi + 'users';
    return this.httpClient.get(url).toPromise();
  }

  getStudentData(studentId:number):Promise<any> {
    const url = environment.dataApi + 'users/' + studentId;
    return this.httpClient.get(url).toPromise();
  }
}

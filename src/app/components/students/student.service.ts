import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { AbcService } from './../../shared/services/abc.service';
import { BaseHttpService } from 'src/app/shared/services/base-http.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService extends AbcService {

  protected endpoint:string = 'users';

  protected transformData(data) {
    data = data.map(item => {
      item.fullname = item.name;
      return item;
    });

    return data;
  }

  getStudentData(studentId:number):Promise<any> {
    return super.getElement('users', studentId);
  }
}

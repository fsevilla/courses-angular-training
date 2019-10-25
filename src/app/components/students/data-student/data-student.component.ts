import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-student',
  templateUrl: './data-student.component.html',
  styleUrls: ['./data-student.component.scss']
})
export class DataStudentComponent implements OnInit {

  studentId:number;
  student:any = {};
  form:FormGroup;

  constructor(private studentService:StudentService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.studentId = params.studentId;
    });
  }

  ngOnInit() {
    this.formInit();
    this.getStudentData();    
  }

  formInit() {
    this.form = new FormGroup({
      name: new FormControl('')
    });
  }

  getStudentData() {
    this.studentService.getStudentData(this.studentId).then(response => {
      this.student = response;
      this.form.patchValue(this.student);
    }).catch(error => {
      console.error('Fallo al traer datos del estudiante');
    });
  }

  updateStudent() {
    console.log('Student: ', this.student);
  }

  cancel(e) {
    console.log('Clicked: ', e);
    // e.preventDefault();
    // e.stopPropagation();
  }

}

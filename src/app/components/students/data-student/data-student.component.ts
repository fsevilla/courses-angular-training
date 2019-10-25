import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-data-student',
  templateUrl: './data-student.component.html',
  styleUrls: ['./data-student.component.scss']
})
export class DataStudentComponent implements OnInit, AfterViewInit {

  @Input() student:Student;

  studentId:number;
  // student:any = {};
  form:FormGroup;
  isChanged:boolean;

  constructor(private studentService:StudentService, private activatedRoute:ActivatedRoute) {
    // this.activatedRoute.params.subscribe(params => {
    //   this.studentId = params.studentId;
    // });
  }

  ngOnInit() {
    this.formInit();
    // this.getStudentData();    
  }

  formInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required)
    });

    this.isFormUpdated();
  }

  getStudentData() {
    this.studentService.getStudentData(this.studentId).then(response => {
      this.student = response;
      this.form.patchValue(this.student);
      this.isChanged = false;
    }).catch(error => {
      console.error('Fallo al traer datos del estudiante');
    });
  }

  updateStudent() {
    if(this.form.valid) {
      const data = this.form.getRawValue();
      console.log('enviar los datos', data, this.student);
    } else {
      console.log('arreglalo primero');
    }
    console.log('Student: ', this.form);
  }

  isFormUpdated() {
    this.form.valueChanges.subscribe(changes => {
      console.log('Changes', changes);
      this.isChanged = true;
    });
  }

  clean() {
    this.form.patchValue(this.student);
  }

  cancel(e) {
    console.log('Clicked: ', e);
    // e.preventDefault();
    // e.stopPropagation();
  }

  ngAfterViewInit() {
    console.log('Student: ', this.student);
  }

  ngOnChanges() {
    console.log('Algo cambio: ', this.student);
    this.form.patchValue(this.student);
  }

}

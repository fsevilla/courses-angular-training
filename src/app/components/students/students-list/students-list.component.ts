import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students:Array<any> = [];

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().then(response => {
      this.students = response;
    }).catch(err => {
      console.error('No trajo datos', err);
    });
  }

}

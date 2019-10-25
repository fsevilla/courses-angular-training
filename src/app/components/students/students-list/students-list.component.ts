import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from './../student.service';
import { Student } from './../student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students:Array<Student> = [];

  @Output() onSelectedStudent = new EventEmitter<Student>();

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.get().then(response => {
      this.students = response;
      console.log('response', response);
    }).catch(err => {
      console.error('No trajo datos', err);
    });
  }

  selectStudent(student:Student) {
    console.log('Selected: ', student);
    this.onSelectedStudent.emit(student);
  }

}

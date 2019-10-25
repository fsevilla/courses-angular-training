import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  selectedStudent:Student = {name:'lorem'};

  constructor() { }

  ngOnInit() {
  }

  handleStudentSelect(event) {
    console.log('handle select ', event);
    this.selectedStudent = event;
  }

}

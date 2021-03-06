import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList: Student[] = [
    {id: 1, name: 'Rahul', class: '1A'},
    {id: 2, name: 'Rohit', class: '5B'},
    {id: 3, name: 'Raj', class: '1C'},
    {id: 4, name: 'Prem', class: '6B'}
  ];

  selectedStudent: Student = null;
  showAdd = false;
  showView = false;

  constructor() { }

  ngOnInit() {
  }

  addStudent(){
    this.showAdd = !this.showAdd;
  }

  addStudentToList(student: Student) {
    this.studentList = [...this.studentList, student];
  }

  selectChange() {
    console.log('select change');
    this.showView = true;
  }
}

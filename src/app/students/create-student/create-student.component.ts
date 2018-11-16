import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  @Output()
  createStudent = new EventEmitter<Student>();
  newStudent: string;

  constructor() { }

  ngOnInit() {
  }

  addStudent() {
    this.createStudent.emit({id: 0, name: this.newStudent, class: 'XI'});
  }
}

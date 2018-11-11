import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teacherList: Teacher[] = [
    {id: 1, name: 'Miss Bigranza', subject: 'Maths'},
    {id: 2, name: 'Miss Donna', subject: 'English'},
    {id: 3, name: 'Miss Mary', subject: 'Social Studies'},
    {id: 4, name: 'Miss Joseph', subject: 'Science'}
  ];

  selectedTeacher: Teacher;

  constructor() { }

  ngOnInit() {
  }

}

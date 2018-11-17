import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  @Input()
  studentData: Student;

  constructor() { }

  ngOnInit() {

  }

}

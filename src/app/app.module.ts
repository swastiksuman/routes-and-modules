import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';

const appRoutes: Routes = [
  { path: 'newTeacher', component: CreateTeacherComponent},
  { path: 'newStudent', component: CreateStudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    StudentsComponent,
    CreateTeacherComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

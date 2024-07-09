import { Component, EventEmitter, Output } from '@angular/core';
import { Grade } from '../model/Grade';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grade-form.component.html',
  styleUrl: './grade-form.component.css'
})
export class GradeFormComponent 
{

  @Output() newGradeEvent:EventEmitter<Grade> = new EventEmitter<Grade>();

  sendNewGradeEvent()
  {
    this.newGradeEvent.emit(this.newGrade);
    this.newGrade = {
      classRoom: "",
      day: "",
      studentName: "",
      studentSurname: "",
      student_id: 0,
      subject: "",
      teacherName: "",
      teacherSurname: "",
      teacher_id: 0,
      value: 0
    };
  }

  newGrade: Grade = {
    classRoom: "",
    day: "",
    studentName: "",
    studentSurname: "",
    student_id: 0,
    subject: "",
    teacherName: "",
    teacherSurname: "",
    teacher_id: 0,
    value: 0
  };

  classMenu:string="hidden p-4";
  header:string="Open form";

  toggleMenu()
  {
    if(this.classMenu=="hidden p-4")
    {
      this.classMenu="p-4";
      this.header="Close form"
    }
    else
    {
      this.classMenu="hidden p-4"
       this.header="Open form"
    }
      

  }
}

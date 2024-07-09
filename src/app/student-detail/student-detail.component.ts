import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../model/Student';
import { Grade } from '../model/Grade';
import { GradeCardComponent } from "../grade-card/grade-card.component";
import { GradeFormComponent } from "../grade-form/grade-form.component";

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [GradeCardComponent, GradeFormComponent],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent 
{
  constructor(private service:StudentService)
  {
    service.getOne(1)
    .subscribe(
      data => 
      {
        this.student = data;
        this.grades = data.grades;

        console.log(this.grades);
      }
    );
  }

  saveGrade(grade:Grade)
  {
    this.service.addGrade(grade,this.student.id!).subscribe(dto=>this.grades.push(dto));
  }

  student!:Student;
  grades!:Grade[];
}

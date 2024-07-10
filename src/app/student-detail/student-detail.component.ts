import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../model/Student';
import { Grade } from '../model/Grade';
import { GradeCardComponent } from "../grade-card/grade-card.component";
import { GradeFormComponent } from "../grade-form/grade-form.component";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [GradeCardComponent, GradeFormComponent],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent 
{
  constructor(private service:StudentService,private route:ActivatedRoute)
  {
    let studentId:number= parseInt(route.snapshot.paramMap.get("id")!);
    service.getOne(studentId)
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
    this.grades.push(grade);
  }

  student!:Student;
  grades!:Grade[];
 
}

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
    this.service.addGrade(grade,this.student.id!)
    .subscribe(
      {
          next: dto=> //viene attivato nel caso positivo
          {
            this.grades.push(dto)
          },
          error: badResponse=> //viene attivato nel caso negativo
          {
            console.log(badResponse);
            if(badResponse.status==404)
              alert("Could not complete request, "+badResponse.error.message);
            else
              alert("PROBLEMI NEL SERVER, RIPROVA PIÙ TARDI")
          }
      }
    );
  }

  student!:Student;
  grades!:Grade[];
}

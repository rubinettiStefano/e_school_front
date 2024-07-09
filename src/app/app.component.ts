import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './services/student.service';
import { Student } from './model/Student';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StudentDetailComponent } from "./student-detail/student-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatExpansionModule, MatIconModule, CommonModule, FormsModule, MatInputModule, MatButtonModule, StudentDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  constructor(private studentService:StudentService)
  {
    studentService.getAll().subscribe( vettoreDiStudentiNelBody => this.students =vettoreDiStudentiNelBody );
  }

  newStudent:Student= {id:null,name:"",surname:"",dob:new Date(),email:"",classRoom:""};
  students:Student[] = [];
  title = 'e_school_front';

  saveStudent()
  {
    console.log(this.newStudent);
    this.studentService
    .insert(this.newStudent)//Observable<Student>
    .subscribe(             //metodo degli Observable
      inserted =>
      {
        this.students.push(inserted);
        this.newStudent = {id:null,name:"",surname:"",dob:new Date(),email:"",classRoom:""};
      }
    );
  }
}

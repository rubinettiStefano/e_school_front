import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './services/student.service';
import { Student } from './model/Student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  constructor(private studentService:StudentService)
  {
    studentService.getAll().subscribe( vettoreDiStudentiNelBody => this.students =vettoreDiStudentiNelBody );
  }


  students:Student[] = [];
  title = 'e_school_front';
}

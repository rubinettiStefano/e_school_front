import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Grade } from '../model/Grade';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { notFutureDateValidation } from '../validators/notFutureDateValidation';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-grade-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './grade-form.component.html',
  styleUrl: './grade-form.component.css'
})
export class GradeFormComponent 
{
  constructor(private service:StudentService){}

  @Input() studentid!:number;
  @Output() newGradeEvent:EventEmitter<Grade> = new EventEmitter<Grade>();

 
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


  gradeForm:FormGroup = new FormGroup(
    {
      day: new FormControl('',[Validators.required,notFutureDateValidation()]),
      subject: new FormControl('',[Validators.required,Validators.minLength(3)]),
      teacherName: new FormControl('',[Validators.required]),
      teacherSurname: new FormControl('',[Validators.required]),
      value: new FormControl(6,[Validators.required])
    }
  );

  teacherError:string="";

  salva()
  {
    this.service.addGrade(this.gradeForm.value,this.studentid)
    .subscribe(
      {
          next: dto=> //viene attivato nel caso positivo
          {
            this.gradeForm.reset();
            this.toggleMenu();
            this.newGradeEvent.emit(dto);
          },
          error: badResponse=> //viene attivato nel caso negativo
          {
            this.gradeForm.get('teacherName')?.setErrors({teacherNotFound:"Teacher Not Found"})
            this.teacherError=badResponse.error.message;
          }
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';
import { Grade } from '../model/Grade';

@Injectable({
  providedIn: 'root'
})
export class StudentService 
{
  constructor(private http:HttpClient) {}

  getAll():Observable<Student[]>
  {
    return this.http.get<Student[]>("/api/students");
  }

  getOne(id:number):Observable<any>
  {
    return this.http.get<any>(`/api/students/${id}`);
  }

  insert(student:Student):Observable<Student>
  {
    return this.http.post<Student>("/api/students",student);
  }


  addGrade(grade:Grade,idstudent:number):Observable<Grade>
  {
    return this.http.post<Grade>(`/api/students/${idstudent}/addgrade`,grade);
  }

}

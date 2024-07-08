import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';

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
}

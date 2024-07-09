import { Component, Input } from '@angular/core';
import { Grade } from '../model/Grade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grade-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grade-card.component.html',
  styleUrl: './grade-card.component.css'
})
export class GradeCardComponent 
{
  @Input() grade!:Grade;
}

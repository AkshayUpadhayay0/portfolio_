import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-education.html',
  styleUrl: './component-education.scss'
})
export class ComponentEducation {
  education = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      institution: 'Graphic Era Hill University',
      year: '2023',
      score: 'CGPA: 7.2/10'
    },
    {
      degree: 'Diploma – Electronics Engineering',
      institution: 'Govt. Polytechnic Dehradun',
      year: '2020',
      score: '74.8%'
    }
  ];
}
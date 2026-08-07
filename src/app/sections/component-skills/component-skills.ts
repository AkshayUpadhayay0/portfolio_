import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-skills.html',
  styleUrl: './component-skills.scss'
})
export class ComponentSkills {
  skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C#', 'SQL', 'TypeScript']
    },
    {
      title: 'Mobile Development',
      skills: ['Android (Java)', 'SQLite', 'Offline-First Architecture', 'Background Services', 'GPS APIs']
    },
    {
      title: 'Backend',
      skills: ['ASP.NET Core', 'REST APIs', 'Authentication & RBAC', 'ASP.NET']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL (GIS)', 'SQL Server', 'SQLite']
    },
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Tools',
      skills: ['Android Studio', 'Visual Studio', 'VS Code', 'Git']
    }
  ];
}
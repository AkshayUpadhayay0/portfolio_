import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  technologies: string[];
}

@Component({
  selector: 'app-component-experience',
  imports: [CommonModule],
  templateUrl: './component-experience.html',
  styleUrl: './component-experience.scss',
})
export class ComponentExperience {
  experiences: Experience[] = [
    {
      title: 'Software Developer',
      company: 'Integrated Geo Informatics Solutions Pvt. Ltd.',
      duration: 'Oct 2024 – Present',
      location: 'Dehradun, India',
      type: 'Full-time',
      summary:
        'Build and maintain Android and .NET systems for large-scale field operations, with offline-first architecture using SQLite and secure sync to ASP.NET Core backends. Implement GPS tracking, geo-tagging, and map-driven workflows — shipped government-grade apps with 50,000+ Play Store downloads.',
      technologies: ['Android (Java)', 'ASP.NET Core', 'SQLite', 'PostgreSQL (GIS)', 'GPS APIs']
    },
    {
      title: 'Full Stack Developer',
      company: 'Arohar Technologies Pvt. Ltd.',
      duration: 'Jul 2022 – Sep 2024',
      location: 'Dehradun, India',
      type: 'Full-time',
      summary:
        'Designed and built full-stack applications using Angular, ASP.NET Core Web API, and SQL Server, including secure REST APIs with role-based access and business validation logic. Improved backend efficiency and UI workflows for dispatch and order management systems while contributing across Agile sprint cycles.',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'TypeScript']
    }
  ];
}
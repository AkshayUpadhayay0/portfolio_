import { Component } from '@angular/core';import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  points: string[];
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
      points: [
        'Develop and maintain Android and .NET-based systems used in large-scale field operations.',
        'Architect offline-first Android applications using SQLite for seamless performance in low/zero connectivity environments.',
        'Design secure data synchronization between Android clients and ASP.NET Core backend services.',
        'Implement GPS-based tracking, geo-tagging, structured field data capture, and map-driven workflows.',
        'Built government-grade applications deployed on Google Play Store with 50,000+ cumulative downloads.'
      ],
      technologies: ['Android (Java)', 'ASP.NET Core', 'SQLite', 'PostgreSQL (GIS)', 'GPS APIs']
    },
    {
      title: 'Full Stack Developer',
      company: 'Arohar Technologies Pvt. Ltd.',
      duration: 'Jul 2022 – Sep 2024',
      location: 'Dehradun, India',
      type: 'Full-time',
      points: [
        'Designed and developed full-stack applications using Angular, ASP.NET Core Web API, and SQL Server.',
        'Built responsive frontend modules with optimized user workflows for operational efficiency.',
        'Developed secure REST APIs implementing authentication, role-based access, and business validation logic.',
        'Improved backend API efficiency and UI workflows for dispatch and order management systems.',
        'Participated in Agile development cycles including sprint planning, code reviews, and production support.'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'TypeScript']
    }
  ];
}

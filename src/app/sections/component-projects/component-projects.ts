import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  points: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
  highlight?: string;
}

@Component({
  selector: 'app-component-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-projects.html',
  styleUrl: './component-projects.scss'
})
export class ComponentProjects implements AfterViewInit {
  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  projects: Project[] = [
    {
      title: 'MSTrIPES Android Applications',
      subtitle: 'National Wildlife Conservation Platform',
      description: 'Production Android apps used by forest officials across protected regions in India for ecological monitoring and patrol operations.',
      highlight: '50,000+ Downloads',
      points: [
        'Developed Ecology App (50,000+ downloads), Patrol App (5,000+), and Polygon Search App.',
        'Implemented GPS tracking for accurate patrol route recording and geo-validation.',
        'Designed structured ecological data capture modules for habitat surveys and wildlife monitoring.',
        'Architected offline-first workflows ensuring uninterrupted functionality in remote forest areas.',
        'Built secure background synchronization for reliable field-to-server data transfer.'
      ],
      technologies: ['Android (Java)', 'SQLite', 'GPS APIs', 'Background Sync', 'ASP.NET Core'],
      links: [
        { label: 'Ecology App', url: 'https://play.google.com/store/apps/details?id=in.igis.mstripesecological' },
        { label: 'Patrol App', url: 'https://play.google.com/store/apps/details?id=in.igis.mstripes_patrol' },
        { label: 'Polygon Search App', url: 'https://play.google.com/store/apps/details?id=in.intgeo.mstripes_polygon' }
      ]
    },
    {
      title: 'MSTrIPES Web Portal',
      subtitle: 'Centralized Monitoring Dashboard',
      description: 'Backend and web modules supporting live patrol tracking and ecological data management for government authorities.',
      points: [
        'Engineered backend modules for live patrol tracking and ecological data management.',
        'Integrated GIS-enabled PostgreSQL datasets for spatial querying and conservation analytics.',
        'Built real-time data processing services powering centralized monitoring dashboards.',
        'Supported large-scale protected-area deployments used by government agencies.'
      ],
      technologies: ['ASP.NET Core', 'PostgreSQL (GIS)', '.NET', 'REST APIs']
    },
    {
      title: 'INTGEO GP Collector App',
      subtitle: 'Geo-Survey & Navigation',
      description: 'Android-based geo-survey and navigation application for field survey teams.',
      points: [
        'Designed geo-point navigation and GP-to-GP routing for field survey teams.',
        'Implemented distance measurement and geo-tagged photo capture features.',
        'Integrated backend APIs for centralized data aggregation and reporting.',
        'Improved field data accuracy through structured capture workflows.'
      ],
      technologies: ['Android (Java)', 'SQLite', 'GPS APIs', 'ASP.NET Core']
    },
    {
      title: 'Fleeticks',
      subtitle: 'Dispatch & Delivery Management System',
      description: 'Full-stack system for order management, trip tracking, invoicing, and compliance monitoring.',
      points: [
        'Developed modules for order management, trip tracking, and invoicing.',
        'Enhanced UI workflows and improved backend response efficiency.',
        'Supported live business operations with rapid bug resolution and production updates.'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server']
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.projectCards.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-hero.html',
  styleUrl: './component-hero.scss',
})
export class ComponentHero implements OnInit, OnDestroy {
  roles = [
    'Software Developer',
    'Android & .NET Engineer',
    'Full Stack Developer',
    'Offline-First Specialist'
  ];
  
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timeoutId: any;

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  typeWriter() {
    const current = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      this.currentRole = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 40 : 90;

    if (!this.isDeleting && this.charIndex === current.length) {
      typeSpeed = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      typeSpeed = 400;
    }

    this.timeoutId = setTimeout(() => this.typeWriter(), typeSpeed);
  }

  scrollTo(section: string) {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-component-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-hero.html',
  styleUrl: './component-hero.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('800ms cubic-bezier(0.22, 1, 0.36, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ComponentHero implements OnInit, OnDestroy {

  roles = [
    'Software Developer',
    'Android & .NET Engineer',
    'Full Stack Developer',
    'Offline-First Specialist'
  ];

  currentRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any = null;
  private isDestroyed = false;

  constructor(
    public themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    this.isDestroyed = true;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type() {
    if (this.isDestroyed) return;

    const fullText = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.currentRole = fullText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = fullText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    // Force Angular to update the view
    this.cdr.detectChanges();

    let delay = this.isDeleting ? 40 : 100;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      // Finished typing → wait then start deleting
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Finished deleting → go to next word
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 400;
    }

    this.timeoutId = setTimeout(() => {
      this.type();
    }, delay);
  }

  scrollTo(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openAIMode() {
    window.open('https://www.fastfol.io/akshaykuma4579', '_blank');
  }
}
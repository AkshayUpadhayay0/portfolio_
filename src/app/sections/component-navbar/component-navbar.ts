import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-component-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-navbar.html',
  styleUrl: './component-navbar.scss',
})
export class ComponentNavbar {
  isScrolled = false;
  activeSection = 'hero';
  isMenuOpen = false;

  
constructor(public themeService: ThemeService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;

    const sections = ['hero', 'experience', 'projects', 'skills', 'education', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;

      const top = element.offsetTop - 120;
      const bottom = top + element.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        this.activeSection = section;
      }
    }
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMenuOpen = false; // close mobile menu
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

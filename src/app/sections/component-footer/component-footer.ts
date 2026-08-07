import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-footer.html',
  styleUrl: './component-footer.scss'
})
export class ComponentFooter {
  currentYear = new Date().getFullYear();
}
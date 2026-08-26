import { Component, signal } from '@angular/core';
import { ComponentNavbar } from './sections/component-navbar/component-navbar';
import { ComponentHero } from './sections/component-hero/component-hero';
import { ComponentExperience } from './sections/component-experience/component-experience';
import { ComponentProjects } from './sections/component-projects/component-projects';
import {ComponentSkills} from './sections/component-skills/component-skills';
import { ComponentEducation } from './sections/component-education/component-education';
import { ComponentFooter } from './sections/component-footer/component-footer';
import { ComponentHobbies } from './sections/component-hobbies/component-hobbies';


@Component({
  selector: 'app-root',
  imports: [ 
    ComponentNavbar, 
    ComponentHero,
    ComponentExperience,
    ComponentProjects,
    ComponentSkills,
    ComponentEducation,
    ComponentFooter,
    ComponentHobbies
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('akshay-portfolio');
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Game {
  title: string;
  description: string;
  technologies: string[];
  playLink?: string;       // Link to play the game
  githubLink?: string;     // Optional GitHub link
  image?: string;          // Optional thumbnail
}

@Component({
  selector: 'app-component-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-hobbies.html',
  styleUrl: './component-hobbies.scss'
})
export class ComponentHobbies {
  games: Game[] = [
    {
      title: 'Dragon Kill',
      description: 'An interactive browser game featuring a glowing cyan dragon...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      playLink: 'https://akshayupadhayay0.github.io/dragon-kill/',
      githubLink: 'https://github.com/AkshayUpadhayay0/dragon-kill',
      image: 'game1_img.png'
    },
    {
      title: 'Dragon Dodge - Space Edition',
      description: 'A simple but addictive browser game built with pure HTML, CSS...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      playLink: 'https://akshayupadhayay0.github.io/dragon_save_game/',
      githubLink: 'https://github.com/AkshayUpadhayay0/dragon_save_game',
      image: 'game2_img.png' 
    }
  ];
}
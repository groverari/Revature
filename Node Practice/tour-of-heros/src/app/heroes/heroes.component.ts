import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { MockHeroService } from '../services/mock-hero.service';
import { NgFor, NgIf } from '@angular/common';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf, HeroDetailComponent],
  providers: [MockHeroService],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  constructor(private mockHeroService: MockHeroService) {}

  heroes: Hero[] = this.mockHeroService.getHeroes();

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

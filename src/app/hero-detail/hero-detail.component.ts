import { Component, OnInit } from '@angular/core';
import { HEROES as Heroes } from '../mock-heroes';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero-service/hero.service'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero;
  constructor(
    private router: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      const heroName = params.get('heroId');
      Heroes.forEach(item => {
        if (item.name === heroName) {
          this.hero = item;
          return;
        }
      });
    });
  }

  updateHero(hero) {
    this.heroService.updateHero(hero);
  }

}

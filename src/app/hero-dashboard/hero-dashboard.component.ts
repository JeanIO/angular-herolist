import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.scss']
})

export class HeroDashboardComponent implements OnInit {

  heroes = HEROES.filter(item => item.top);
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

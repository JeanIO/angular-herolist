import { HomePageComponent } from './home-page/home-page.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const Routes = [{ path: '', component: HomePageComponent },
  { path: 'heroes', component: HeroesComponent, children: [
      { path: 'hero-list', component: HeroListComponent },
      { path: 'dashboard', component: HeroDashboardComponent},
    ] },
  { path: 'heroes/:heroId', component: HeroDetailComponent }]


export default Routes;

import { Routes } from '@angular/router';
import { LoginComponent } from './movies/login/login.component';
import { HomeComponent } from './movies/home/home.component';
import { MovieComponent } from './movies/movie/movie.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './features/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'offres',
    loadComponent: () => import('./features/offres/offres/offres.component').then(m => m.OffresComponent)
  },
  {
    path: 'stages',
    loadComponent: () => import('./features/stages/stages/stages.component').then(m => m.StagesComponent)
  },
  {
    path: 'compte',
    loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./core/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

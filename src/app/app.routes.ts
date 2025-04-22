import { Routes } from '@angular/router';
//Se definen las rutas para navegación
export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component') },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component'),
  },
  {
    path: 'services',
    loadComponent: () => import('./components/services/services.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component'),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }, // Aquí se redirecciona a la raíz si la ruta no se encuentra
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./usuarios/lista/lista.component'),
  },
  {
    path: 'usuario/:id',
    loadComponent: () => import('./usuarios/usuario/usuario.component')
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

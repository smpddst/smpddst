import { Routes } from '@angular/router';
import { ComingSoon } from './pages/coming-soon/coming-soon';

export const routes: Routes = [
  {
    path: '',
    component: ComingSoon,
    title: 'Sri Mata Phool Devi Dharma Seva Trust',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

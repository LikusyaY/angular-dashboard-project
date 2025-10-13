import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/recommendations', pathMatch: 'full' },
  {
    path: 'recommendations',
    loadComponent: () =>
      import('./shared/components/smart/ads-list/ads-list.component').then(
        (m) => m.AdsListComponent,
      ),
  },
  {
    path: 'advert-page',
    loadComponent: () => import('./pages/advert/advert.component').then((m) => m.AdvertComponent),
  },
];

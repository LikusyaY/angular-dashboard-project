import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/recommendations', pathMatch: 'full' },
  {
    path: 'recommendations',
    loadComponent: () =>
      import('./pages/recommendations/recommendations.component').then(
        (m) => m.RecommendationsComponent,
      ),
  },
  {
    path: 'advert-page',
    loadComponent: () => import('./pages/advert/advert.component').then((m) => m.AdvertComponent),
  },

  {
    path: 'my-ads',
    loadComponent: () =>
      import('./pages/lk/user-ads/user-ads.component').then((m) => m.UserAdsComponent),
  },
];

import { Routes } from '@angular/router';
import { AdsListComponent } from './shared/components/smart';
import { AdPageComponent } from './pages/ad-page/ad-page.component';
import { CategoriesComponent } from './shared/components/smart/categories/categories.component';

export const routes: Routes = [
    {path: '', redirectTo: '/recommendations', pathMatch: 'full'},
    {path:'recommendations', component: AdsListComponent},
    {path: 'ad-detailed-page', component: AdPageComponent},
    {path: 'categories', component: CategoriesComponent},

];

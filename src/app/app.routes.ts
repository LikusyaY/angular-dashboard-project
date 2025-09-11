import { Routes } from '@angular/router';
import { AdsListComponent } from './shared/components/smart';
import { AdPageComponent } from './pages/ad-page/ad-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/recommendations', pathMatch: 'full'},
    {path:'recommendations', component: AdsListComponent},
    {path: 'ad-detailed-page', component: AdPageComponent},

];

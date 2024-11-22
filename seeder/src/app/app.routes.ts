import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCashkickPageComponent } from './seeder/pages/new-cashkick-page/new-cashkick-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: NewCashkickPageComponent },
];

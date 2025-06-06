import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./register/register.component').then((m) => m.RegisterComponent)
    },
    { path: '**', component: HomeComponent, pathMatch: 'full'},
];

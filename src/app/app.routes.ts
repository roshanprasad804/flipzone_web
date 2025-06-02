import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () =>
            import('./login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'register',
        loadChildren: () =>
            import('./register/register.component').then((m) => m.RegisterComponent)
    },
    { path: '**', component: HomeComponent, pathMatch: 'full' },
];

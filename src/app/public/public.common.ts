import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthPublicGuard } from '../services/auth-public.guard';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path : '',
        component : LoginComponent,
        canActivate:[AuthPublicGuard]
    },
    {
        path : 'login',
        component : LoginComponent,
        canActivate:[AuthPublicGuard]
    },
    
];

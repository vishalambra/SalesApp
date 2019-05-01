import { Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AuthPrivateGuard } from '../services/auth-private.guard';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path : 'team',
        component : TeamComponent,
        canActivate:[AuthPrivateGuard],
        children:[
            {
                path : 'editTeam',
                component : EditTeamComponent,
            },
            {
                path : 'addTeam',
                component : AddTeamComponent,
            }
        ]
    },
    
];

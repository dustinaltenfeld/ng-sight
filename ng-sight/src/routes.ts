import { Routes } from '@angular/router'
import { UsersInDBComponent } from './app/sections/users-in-db/users-in-db.component';
import { UsersToDBComponent } from './app/sections/users-to-db/users-to-db.component';
import { UsersDeleteFromDBComponent } from './app/sections/users-delete-from-db/users-delete-from-db.component';
import { ServerStatesComponent } from './app/sections/server-states/server-states.component';

export const appRoutes: Routes = [
 {path: 'users',component: UsersInDBComponent},
 {path: 'addusers',component: UsersToDBComponent},
 {path: 'deleteusers', component: UsersDeleteFromDBComponent},
 {path: 'serverstats', component: ServerStatesComponent},
 {path: '', redirectTo: '/users', pathMatch: 'full'}
];
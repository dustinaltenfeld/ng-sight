import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { appRoutes } from '../routes'

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersInDBComponent } from './sections/users-in-db/users-in-db.component';
import { UsersToDBComponent } from './sections/users-to-db/users-to-db.component';
import { UsersDeleteFromDBComponent } from './sections//users-delete-from-db/users-delete-from-db.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    UsersInDBComponent,
    UsersToDBComponent,
    UsersDeleteFromDBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

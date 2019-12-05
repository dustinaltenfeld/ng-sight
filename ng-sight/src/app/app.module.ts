import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
/*import { LOCALE_ID } from '@angular/core';*/

import { appRoutes } from '../routes'

import { NgModule } from '@angular/core';
import { ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersInDBComponent } from './sections/users-in-db/users-in-db.component';
import { UsersToDBComponent } from './sections/users-to-db/users-to-db.component';
import { UsersDeleteFromDBComponent } from './sections//users-delete-from-db/users-delete-from-db.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ServerStatesComponent } from './sections/server-states/server-states.component';
import { ServerComponent } from './server/server.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SalesDataService } from './services/sales-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    UsersInDBComponent,
    UsersToDBComponent,
    UsersDeleteFromDBComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerStatesComponent,
    ServerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpModule
  ],
  providers: [SalesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

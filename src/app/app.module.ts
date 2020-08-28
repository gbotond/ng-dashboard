import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GameStatisticsComponent } from './game-statistics/game-statistics.component';
import { GamesComponent } from './games/games.component';
import { SystemHealthComponent } from './system-health/system-health.component';
import { ServerComponent } from './system-health/server/server.component';

import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { ChartModule } from 'primeng/chart';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    GameStatisticsComponent,
    GamesComponent,
    SystemHealthComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

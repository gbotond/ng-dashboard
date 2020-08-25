import { Routes } from '@angular/router';
import { GameStatisticsComponent } from './app/game-statistics/game-statistics.component';
import { GamesComponent } from './app/games/games.component';
import { AppHealthComponent } from './app/app-health/app-health.component';

export const appRoutes: Routes = [
    { path: 'stats', component: GameStatisticsComponent },
    { path: 'games', component: GamesComponent },
    { path: 'health', component: AppHealthComponent },

    { path: '', redirectTo: '/stats', pathMatch: 'full' }
];
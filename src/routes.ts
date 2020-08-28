import { Routes } from '@angular/router';
import { GameStatisticsComponent } from './app/game-statistics/game-statistics.component';
import { GamesComponent } from './app/games/games.component';
import { SystemHealthComponent } from './app/system-health/system-health.component';

export const appRoutes: Routes = [
    { path: 'stats', component: GameStatisticsComponent },
    { path: 'games', component: GamesComponent },
    { path: 'health', component: SystemHealthComponent },

    { path: '', redirectTo: '/stats', pathMatch: 'full' }
];
import { Routes } from '@angular/router';
import { GameStatisticsComponent } from './app/game-statistics/game-statistics.component';
import { GameComponent } from './app/game/game.component';
import { SystemHealthComponent } from './app/system-health/system-health.component';

export const appRoutes: Routes = [
    { path: 'stats', component: GameStatisticsComponent },
    { path: 'game', component: GameComponent },
    { path: 'health', component: SystemHealthComponent },

    { path: '', redirectTo: '/stats', pathMatch: 'full' }
];
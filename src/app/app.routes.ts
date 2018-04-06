import { Routes } from '@angular/router';

import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/list.component';

export const ROUTES: Routes = [
    { path: 'players', component: PlayerListComponent },
    { path: 'players/:playerId', component: PlayerComponent },
];

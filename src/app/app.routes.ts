import { Routes } from '@angular/router';

import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/list.component';
import { GirlHomeComponent } from './girl/home.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { path: 'players', component: PlayerListComponent },
    { path: 'players/:playerId', component: PlayerComponent },
    { path: 'girls', component: GirlHomeComponent },
    { path: '', component: HomeComponent },
];

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {PlayerModel} from '../_models/player';

const host = `http://localhost:3000`;

@Injectable()
export class PlayerService {
    constructor(private http: HttpClient) {}

    fetchHistory(playerId: string): Observable<PlayerModel> {
        return this.http
            .get<PlayerModel>(`${host}/api/players/${playerId}`)
            .map(player => {
                player.history.forEach(history => history.date = new Date(history.date));
                return player;
            })
        ;
    }
}

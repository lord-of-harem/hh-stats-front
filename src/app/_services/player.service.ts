import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {PlayerModel} from '../_models/player';
import {TopModel} from '../_models/top';

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

    searchPlayer(search): Observable<any> {
        return this.http.get(`${host}/api/players/search/${search}`);
    }

    fetchTopDay(): Observable<TopModel> {
        return this.http.get(`${host}/api/top/day`);
    }
}

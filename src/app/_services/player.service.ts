import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {PlayerModel} from '../_models/player';
import {TopModel} from '../_models/top';
import {environment} from '../../environments/environment';

const host = environment.api;

@Injectable()
export class PlayerService {
    constructor(private http: HttpClient) {}

    fetchHistory(playerId: string): Observable<PlayerModel> {
        return this.http
            .get<PlayerModel>(`${host}players/${playerId}`)
            .map(player => {
                player.history.forEach(history => history.date = new Date(history.date));
                return player;
            })
        ;
    }

    searchPlayer(search): Observable<any> {
        return this.http.get(`${host}players/search/${search}`);
    }

    fetchTopDay(): Observable<TopModel> {
        return this.http.get<TopModel>(`${host}top/day`);
    }
}

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {PlayerModel} from '../_models/player';

const host = `http://localhost:3000`;

@Injectable()
export class PlayerService {
    constructor(private http: Http) {}

    fetchHistory(playerId: string): Observable<PlayerModel> {
        return this.http
            .get(`${host}/api/players/${playerId}`)
            .map(res => {
                const data: PlayerModel = res.json();

                data.history.forEach(history => history.date = new Date(history.date));

                return data;
            })
        ;
    }
}

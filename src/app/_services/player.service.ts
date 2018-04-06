import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

const host = `http://localhost:3000`;

@Injectable()
export class PlayerService {
    constructor(private http: Http) {}

    fetchHistory(playerId: string) {
        return this.http.get(`${host}/api/players/${playerId}`);
    }
}

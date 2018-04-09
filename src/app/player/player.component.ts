import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../_services/player.service';
import {PlayerModel} from '../_models/player';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
    private player: Observable<PlayerModel>;
    private loading = true;

    constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

    ngOnInit() {
        this.player = this.playerService.fetchHistory(this.route.snapshot.paramMap.get('playerId'));
    }

}

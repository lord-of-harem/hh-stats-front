import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../_services/player.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
    player = {};
    history = {};

    constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

    ngOnInit() {
        this.playerService.fetchHistory(this.route.snapshot.paramMap.get('playerId'))
            .subscribe(res => {
                const data = res.json();
                console.log(data);
                this.player = data.player;
                this.history = data.history;
            });
    }

}

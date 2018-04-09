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
    private player$: Observable<PlayerModel>;
    private player: PlayerModel;
    private chart;

    constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

    ngOnInit() {
        this.player$ = this.playerService.fetchHistory(this.route.snapshot.paramMap.get('playerId'));
        this.player$.subscribe(player => {
            this.player = player;
            this.loadChart('victory_points');
        });
    }

    private loadChart(type) {
        this.chart = {
            chartType: 'LineChart',
            dataTable: [[
                'Date',
                'Valeur',
            ]],
            options: {
                title: 'Historique du joueur',
                pointSize: 10,
            },
        };

        this.player.history
            .reverse()
            .forEach(history => this.chart.dataTable.push([
                history.date,
                history[type + '_value'],
            ]))
        ;
    }
}

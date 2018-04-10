import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../_services/player.service';
import {fields, PlayerModel} from '../_models/player';
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
    private fields: Array<string>;

    constructor(private route: ActivatedRoute, private playerService: PlayerService) {
        this.fields = fields;
    }

    ngOnInit() {
        this.player$ = this.playerService.fetchHistory(this.route.snapshot.paramMap.get('playerId'));
        this.player$.subscribe(player => {
            this.player = player;
            this.loadChart(this.fields[0]);
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
                height: 400,
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

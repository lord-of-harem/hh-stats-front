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
    private chartType;
    private fields: Array<string>;

    constructor(private route: ActivatedRoute, private playerService: PlayerService) {
        this.fields = fields;
        this.chartType = this.fields[0];
    }

    ngOnInit() {
        this.player$ = this.playerService.fetchHistory(this.route.snapshot.paramMap.get('playerId'))
            .map(player => {
                this.player = player;
                this.loadChart();
                return this.player;
            })
        ;
    }

    private loadChart() {
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
                history[this.chartType + '_value'],
            ]))
        ;
    }
}

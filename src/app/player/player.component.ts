import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PlayerService} from '../_services/player.service';
import {fields, PlayerModel} from '../_models/player';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
    player$: Observable<PlayerModel>;
    player: PlayerModel;
    chart;
    chartType;
    fields: Array<string>;

    constructor(private route: ActivatedRoute, private playerService: PlayerService) {
        this.fields = fields;
        this.chartType = this.fields[0];
    }

    ngOnInit() {
        this.player$ = this.route.paramMap
            .map((params: ParamMap) => params.get('playerId'))
            .switchMap(playerId => this.playerService.fetchHistory(playerId))
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

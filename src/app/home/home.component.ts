import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../_services/player.service';
import { TopModel } from '../_models/top';
import { fields } from '../_models/player';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    top$: Observable<TopModel>;
    fields: Array<string>;

    constructor(private playerService: PlayerService) {
        this.fields = fields;
    }

    ngOnInit() {
        this.top$ = this.playerService
            .fetchTopDay()
        ;
    }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlayerService } from './_services/player.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private searchControl = new FormControl();
    private players$: Observable<any>;

    constructor(private playerService: PlayerService, private router: Router) {}

    ngOnInit() {
        this.players$ = this.searchControl.valueChanges
            .filter(query => query.length >= 3)
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(query => this.playerService.searchPlayer(query))
        ;
    }

    submit() {
        console.log('---', this.searchControl.value);
        this.searchControl.setValue('');
    }

    selectPlayer(idPlayer) {
        this.searchControl.setValue('');
        this.router.navigate(['/players', idPlayer]);
    }
}

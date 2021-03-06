import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
} from '@angular/material';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player/list.component';
import { PlayerService } from './_services/player.service';
import { GirlHomeComponent } from './girl/home.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        PlayerComponent,
        PlayerListComponent,
        GirlHomeComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        Ng2GoogleChartsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        MatSelectModule,
        MatDividerModule,
        MatListModule,
    ],
    providers: [
        PlayerService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

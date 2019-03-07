import { Component } from "@angular/core";
import {IonicPage , NavController , NavParams} from 'ionic-angular'
import { TournamentsPage } from "../tournaments/tournaments";

@Component({
    selector : 'page-my-teams',
    templateUrl : 'my-teams.html'
})
export class MytTeamsPage{
    constructor(private nav : NavController ){}

    goToTournaments(){
        this.nav.push(TournamentsPage);
    }
}
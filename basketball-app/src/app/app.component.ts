import { Component, Input, Output } from '@angular/core';
import { Athlete, ATHLETE_DATA } from './model/athlete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'basketball-app';
  athletes: Athlete[] = ATHLETE_DATA;
  athleteName: string = "";
  athleteSport: string = "";
  athleteActive: boolean = false;
  createAthlete(): void {
    if ((this.athleteName.length <= 0) || (this.athleteSport.length <= 0))
      return;

    let athlete: Athlete = {
      name: this.athleteName,
      sport: this.athleteSport,
      active: this.athleteActive,
    }
    console.log(athlete);
    this.athletes.push(athlete);
    this.resetAthlete();
  }
  resetAthlete(): void {
    this.athleteName = '';
    this.athleteSport = "";
    this.athleteActive = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Athlete } from 'src/app/model/athlete';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {
  @Input()
  athlete: Athlete = {
    name: '',
    sport: '',
    active: false,
  }
  isActive(): string {
    return "Hello World";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Day } from '../interfaces/day';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  days: Day[] = [
    {
    number: 1,
    exercises: [],
    name: "Test day 1"
    },
    {
      number: 3,
      exercises: [],
      name: "Test day 2"
    },
    {
      number: 5,
      exercises: [],
      name: "Test day 3"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

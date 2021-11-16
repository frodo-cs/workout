import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../interfaces/day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() day: Day = {} as Day;
  constructor() { }

  ngOnInit(): void {
  }

}

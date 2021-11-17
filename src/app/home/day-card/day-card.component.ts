import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Day } from 'src/app/interfaces/day';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent {
  @Input() day: Day = {} as Day;
  @Output() event = new EventEmitter<Day>();

  sendDay(){
    this.event.emit(this.day);
  }
}

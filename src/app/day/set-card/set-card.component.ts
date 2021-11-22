import { ExerciseSet } from './../../interfaces/exercise-set';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-set-card',
  templateUrl: './set-card.component.html',
  styleUrls: ['./set-card.component.scss']
})
export class SetCardComponent {
  @Input() index: number = 0;
  @Input() set: ExerciseSet = {} as ExerciseSet;
  @Output() event = new EventEmitter<ExerciseSet>();
  @Input() erasable: boolean = true;

  constructor(){
    console.log(this.erasable);
  }
  delete() : void {
    this.event.emit(this.set);
  }
}

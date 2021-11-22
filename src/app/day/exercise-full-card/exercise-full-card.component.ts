import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';

@Component({
  selector: 'app-exercise-full-card',
  templateUrl: './exercise-full-card.component.html',
  styleUrls: ['./exercise-full-card.component.scss']
})
export class ExerciseFullCardComponent {
  @Input() exercise: Exercise = {} as Exercise;
  @Input() index: number = 0;
  @Output() event = new EventEmitter<Exercise>();
  constructor() { }

  getMuscles() : string {
    return this.exercise.muscles.join(', ');
  }

  delete() : void {
    if(confirm("Are you sure to delete "+ this.exercise.name)) {
      this.event.emit(this.exercise);
    }
  }
}

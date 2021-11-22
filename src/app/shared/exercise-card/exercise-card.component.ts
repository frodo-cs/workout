import { Exercise } from 'src/app/interfaces/exercise';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent {
  @Input() exercise: Exercise = {} as Exercise;
  @Output() event = new EventEmitter<Exercise>();
  constructor() { }

  getMuscles() : string {
    return this.exercise.muscles.join(', ');
  }

  delete(){
    if(confirm("Are you sure to delete "+ this.exercise.name)) {
      this.event.emit(this.exercise);
    }
  }
}

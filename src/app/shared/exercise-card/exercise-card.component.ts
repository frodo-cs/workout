import { Component, Input } from '@angular/core';
import { Exercise } from '../../interfaces/exercise';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent {
  @Input() exercise: Exercise = {} as Exercise;
  constructor() { }

  getMuscles() : string {
    return this.exercise.muscles.join(', ');
  }
}

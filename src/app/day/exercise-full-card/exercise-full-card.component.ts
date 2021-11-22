import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';

@Component({
  selector: 'app-exercise-full-card',
  templateUrl: './exercise-full-card.component.html',
  styleUrls: ['./exercise-full-card.component.scss']
})
export class ExerciseFullCardComponent {
  @Input() exercise: Exercise = {} as Exercise;
  @Input() index: number = 0;
  constructor() { }

  getMuscles() : string {
    return this.exercise.muscles.join(', ');
  }
}

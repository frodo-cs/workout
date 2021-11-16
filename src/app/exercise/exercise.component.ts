import { Exercise } from './../interfaces/exercise';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @Input() exercise: Exercise = {} as Exercise;
  constructor() { }

  ngOnInit(): void {
  }

}

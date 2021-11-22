import { ExerciseSet } from './../../interfaces/exercise-set';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-card',
  templateUrl: './set-card.component.html',
  styleUrls: ['./set-card.component.scss']
})
export class SetCardComponent implements OnInit {
  @Input() index: number = 0;
  @Input() set: ExerciseSet = {} as ExerciseSet;
  constructor() { }

  ngOnInit(): void {
  }

}

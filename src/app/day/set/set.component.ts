import { ExerciseSet } from './../../interfaces/exercise-set';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  isDuration = false;
  slideToggleText = "Reps";
  set: ExerciseSet = {} as ExerciseSet;
  @Output() event = new EventEmitter<ExerciseSet>();

  constructor() { }

  ngOnInit(): void {
  }

  onSlideChange(): void {
    this.slideToggleText = !this.isDuration ? "Reps" : "Duration";
  }

  sendSet() {
    this.event.emit(this.set);
  }
}

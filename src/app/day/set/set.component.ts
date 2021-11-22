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

  onToggleChange(val: string): void {
    console.log(val);
    this.isDuration = val == "rep" ? false : true;
  }

  sendSet() {
    this.event.emit(this.set);
  }
}

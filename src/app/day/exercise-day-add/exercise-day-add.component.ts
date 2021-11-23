import { Exercise } from 'src/app/interfaces/exercise';
import { ExerciseSet } from './../../interfaces/exercise-set';
import { DayService } from '../day.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-day-add',
  templateUrl: './exercise-day-add.component.html',
  styleUrls: ['./exercise-day-add.component.scss']
})
export class ExerciseDayAddComponent implements OnInit {
  @Output() event = new EventEmitter<Exercise>();
  @Input() exercise: Exercise = {} as Exercise;
  exercises: Exercise[] = [];
  sets: ExerciseSet[] = [];
  addSet: boolean = false;

  constructor(
  public dayService : DayService
  ) { }

  ngOnInit(): void {
    this.exercises = this.dayService.getExerciseList();
  }

  sendExercise(){
    this.exercise.sets = this.sets;
    this.event.emit(this.exercise);
  }

  onAddSet(set: ExerciseSet){
    set.id = this.sets.length + 1;
    this.sets.push(set);
    this.addSet = false;
  }

  removeSet(set: ExerciseSet){
    this.sets = this.sets.filter(x => x.id != set.id);
  }
}

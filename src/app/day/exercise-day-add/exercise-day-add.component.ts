import { Exercise } from './../../interfaces/exercise';
import { ExerciseSet } from './../../interfaces/exercise-set';
import { DayService } from '../day.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exercise-day-add',
  templateUrl: './exercise-day-add.component.html',
  styleUrls: ['./exercise-day-add.component.scss']
})
export class ExerciseDayAddComponent implements OnInit {
  exercises: Exercise[] = [];
  exercise: Exercise = {} as Exercise;
  sets: ExerciseSet[] = [];

  constructor(
    public dayService : DayService,
    public dialogRef: MatDialogRef<ExerciseDayAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise) { }

    ngOnInit(): void {
      this.exercises = this.dayService.getExerciseList();
    }

    cancel() : void {
      this.dialogRef.close();
    }

}

import { Exercise } from './../../interfaces/exercise';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExerciseSet } from 'src/app/interfaces/exercise-set';
import { DayService } from '../day.service';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss']
})
export class ExerciseEditComponent implements OnInit {
  exercises: Exercise[] = [];
  sets: ExerciseSet[] = [];

  constructor(
    public dayService : DayService,
    public dialogRef: MatDialogRef<ExerciseEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise) { }

  ngOnInit(): void {
    this.exercises = this.dayService.getExerciseList();
    this.sets = this.data.sets;
  }

  onChange(val: Exercise) {
    this.data.sets = this.sets;
  }

  cancel() : void {
    this.dialogRef.close();
  }
}

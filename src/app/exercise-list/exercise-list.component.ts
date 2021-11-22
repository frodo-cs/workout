import { MatDialog } from '@angular/material/dialog';
import { ExerciseService } from './exercise.service';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../interfaces/exercise';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  exercises: Exercise[] = [];
  exerciseDialog: Exercise = {} as Exercise;
  muscles: string[] = [];
  constructor(
    public exerciseService : ExerciseService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('exercises')){
      this.exerciseService.setExercises();
    }
    this.exercises = this.
  }

  setExercises() {
    let storage: string | null = localStorage.getItem('exercises')
    if(storage){
      this.exercises = JSON.parse(storage) as Exercise[];
    }
  }

  sortedExercises(){
    return this.exercises.sort((a,b) => {
      return a.name.localeCompare(b.name);
    })
  }

  addExercise(){
    const dialogRef = this.dialog.open(ExerciseAddComponent, {
      width: '450px',
      data: {
        muscles: this.exerciseDialog.muscles ? this.exerciseDialog.muscles : [],
        name: this.exerciseDialog.name ? this.exerciseDialog.name : 'unnamed',
        description: this.exerciseDialog.description ? this.exerciseDialog.description : ''
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res){
        this.exercises.push(res);
        this.exerciseService.saveExercises(this.exercises);
      }
    })
  }

  removeExercise(exercise: Exercise){

  }
}

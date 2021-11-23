import { ExerciseService } from './../exercise.service';
import { Exercise } from 'src/app/interfaces/exercise';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseAddComponent } from '../exercise-add/exercise-add.component';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent {
  @Input() exercise: Exercise = {} as Exercise;
  @Output() event = new EventEmitter<Exercise>();
  
  constructor(
    public dialog: MatDialog,
    public exerciseService : ExerciseService
  ) { }

  getMuscles() : string {
    return this.exercise.muscles.join(', ');
  }

  delete(){
    if(confirm("Are you sure to delete "+ this.exercise.name)) {
      this.event.emit(this.exercise);
    }
  }

  edit(){
    const dialogRef = this.dialog.open(ExerciseAddComponent, {
      width: '450px',
      data: {
        id: this.exercise.id,
        muscles: this.exercise.muscles,
        name: this.exercise.name
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res){
        this.exerciseService.updateExercise(res as Exercise);
        this.exercise = res as Exercise;
      }
    })
  }
}

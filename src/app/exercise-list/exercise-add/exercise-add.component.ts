import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.scss']
})
export class ExerciseAddComponent {
  muscles: string[] = [];
  musclesCheckBox: { name: string, checked: boolean }[] = [];

  constructor(
    public exerciseService : ExerciseService,
    public dialogRef: MatDialogRef<ExerciseAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise) {
      this.exerciseService.setMuscles();
      this.muscles = this.exerciseService.getMuscles();
      this.musclesCheckBox = this.muscles.map(m => ({ name: m, checked: false }));
    }

    cancel() : void {
      this.dialogRef.close();
    }

    onChange() : void {
      this.data.muscles = this.musclesCheckBox.filter(x => x.checked === true).map(x => x.name);
    }
}

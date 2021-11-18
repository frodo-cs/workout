import { DayService } from '../day.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercise } from 'src/app/interfaces/exercise';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-exercise-day-add',
  templateUrl: './exercise-day-add.component.html',
  styleUrls: ['./exercise-day-add.component.scss']
})
export class ExerciseDayAddComponent {
  muscles: string[] = [];
  musclesCheckBox: { name: string, checked: boolean }[] = [];

  constructor(
    public dayService : DayService,
    public dialogRef: MatDialogRef<ExerciseDayAddComponent>,
    public sharedService : SharedService,
    @Inject(MAT_DIALOG_DATA) public data: Exercise) { }

    OnInit() {
      this.sharedService.setMuscles();
      this.muscles = this.sharedService.getMuscles();
      this.musclesCheckBox = this.muscles.map(m => ({ name: m, checked: false }));
    }

    cancel() : void {
      this.dialogRef.close();
    }

    onChange() : void {
      this.data.muscles = this.musclesCheckBox.filter(x => x.checked === true).map(x => x.name);
    }
}

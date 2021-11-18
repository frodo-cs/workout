import { Exercise } from 'src/app/interfaces/exercise';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Day } from '../interfaces/day';
import { DayService } from './day.service';
import { ActivatedRoute } from '@angular/router';
import { ExerciseDayAddComponent } from './exercise-day-add/exercise-day-add.component';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  day: Day = {} as Day;
  canEdit: boolean = false;
  freeDays: number[] = [];
  oldDay: number = 0;
  exercises: Exercise[] = [];

  constructor(
    public dayService : DayService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() : void {
    if(!localStorage.getItem('days')){
      this.dayService.setDays();
    } 
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.day = this.dayService.getDay(id);
    this.freeDays = this.dayService.getFreeDays();

    if(!localStorage.getItem('myExercises') && localStorage.getItem('days')){
      this.dayService.setMyExercises(this.day);
    }
    
    this.exercises = this.dayService.getExercises(this.day.id);
  }

  editDay() : void {
    this.oldDay = this.day.day;
    this.canEdit = true;
  }

  saveDay() : void {
    console.log(this.oldDay);
    console.log(this.day);
    this.dayService.updateDay(this.oldDay, this.day);
    this.oldDay = this.day.day;
    this.canEdit = false;
    this.freeDays = this.dayService.getFreeDays();
  }

  addExercise(){
    const dialogRef = this.dialog.open(ExerciseDayAddComponent, {
      width: '450px',
      data: {

      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res){
        this.exercises.push(res);
        this.dayService.saveExercises(this.exercises);
      }
    })
  }
}

import { SharedService } from 'src/app/shared/shared.service';
import { Exercise } from 'src/app/interfaces/exercise';
import { Component, OnInit } from '@angular/core';
import { Day } from '../interfaces/day';
import { DayService } from './day.service';
import { ActivatedRoute } from '@angular/router';

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
  newExercise: boolean = false;
  exercise: Exercise = {} as Exercise;

  constructor(
    public sharedService : SharedService,
    public dayService : DayService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() : void {
    if(!localStorage.getItem('days')){
      this.sharedService.setDays();
    } 
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.day = this.dayService.getDay(id);
    this.freeDays = this.dayService.getFreeDays();
  }

  editDay() : void {
    this.oldDay = this.day.day;
    this.canEdit = true;
  }

  saveDay() : void {
    this.dayService.updateDay(this.oldDay, this.day);
    this.oldDay = this.day.day;
    this.canEdit = false;
    this.freeDays = this.dayService.getFreeDays();
  }

  addExercise(){
    this.newExercise = !this.newExercise;
  }
  
  saveExercise(exercise : Exercise){
    this.newExercise = !this.newExercise;
    this.day.exercises.push(exercise);
    this.dayService.updateDay(this.day.day, this.day);
  }

  removeExercise(exercise : Exercise){
    this.day.exercises = this.day.exercises.filter(x => x.id != exercise.id);
    this.dayService.updateDay(this.day.day, this.day);
  }

  editExercise(exercise : Exercise){
    this.newExercise = true;
    this.exercise = exercise;
  }
}

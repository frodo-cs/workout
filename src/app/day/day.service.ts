import { MyExercise } from './my-exercise';
import { Exercise } from 'src/app/interfaces/exercise';
import { Day } from './../interfaces/day';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  constructor(
    private http: HttpClient,
    public sharedService : SharedService,
  ) { }

  getExerciseList() : Exercise[] {
    let storage: string | null = localStorage.getItem('exercises');
    if(!storage){
      this.sharedService.setExercises();
    } 
    return this.sharedService.getExercises();  
  }

  saveExercises(exercises: Exercise[]) {
  }

  updateDay(oldDay: number, day: Day) : void {
    let days = this.sharedService.getDays();
    days = days.filter(d => { return d.day != oldDay});
    days.push(day);
    localStorage.setItem('days', JSON.stringify(days));
  }

  getDay(id: number) : Day {
    let days = this.sharedService.getDays();
    let day = days.find(d => { return d.id == id});
    if (day)
      return day;
    return {} as Day;
  }

  getFreeDays() : number[] {
    let days = this.sharedService.getDays();
    let allDays = [ 1, 2, 3, 4, 5, 6, 7 ]
    return allDays.filter(d => !days.map(d => { return d.day}).includes(d));
  } 

  setDays() : void {
    this.http.get<Day[]>('../assets/days.json').subscribe((data) => {
      localStorage.setItem('days', JSON.stringify(data));
    });
  }

  getMyExercises(id: number): Exercise[] {
    let storage: string | null = localStorage.getItem('myExercises');
    if(storage){
      let exercises = JSON.parse(storage) as MyExercise[];
      let exercise = exercises.find(x => x.id == id);
      if(exercise)
        return exercise.exercises
    }
    return [];
  }

  setMyExercises(day: Day) : void {
    let storage: string | null = localStorage.getItem('exercises');
    if(storage){
      let exercises = JSON.parse(storage) as MyExercise[];
      exercises = exercises.filter( x => { return x.id != day.id; });
      exercises.push({ id: day.id, exercises: day.exercises} as MyExercise);
    } else {
      let exercise: MyExercise  = {
        id: day.id,
        exercises: day.exercises
      }
      localStorage.setItem('myExercises', JSON.stringify([exercise]));
    }
  }
}

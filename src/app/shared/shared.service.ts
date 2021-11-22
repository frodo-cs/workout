import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Day } from '../interfaces/day';
import { Exercise } from '../interfaces/exercise';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(
    private http: HttpClient
  ) { }

  setExercises() : void {
    this.http.get<Exercise[]>('../assets/exercises.json').subscribe((data) => {
      localStorage.setItem('exercises', JSON.stringify(data));
    });
  }

  getExercises() : Exercise[] {
    let storage: string | null = localStorage.getItem('exercises');
    if(storage){
      return JSON.parse(storage) as Exercise[];
    }
    return [];
  }

  setDays() : void {
    this.http.get<Day[]>('../assets/days.json').subscribe((data) => {
      localStorage.setItem('days', JSON.stringify(data));
    });
  }

  getDays() : Day[] {
    let storage: string | null = localStorage.getItem('days');
    if(storage){
      return JSON.parse(storage) as Day[];
    }
    return [];
  }
}

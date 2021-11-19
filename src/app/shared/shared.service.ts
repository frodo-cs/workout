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

  setMuscles() : void {
    this.http.get<Exercise[]>('../assets/muscles.json').subscribe((data) => {
      localStorage.setItem('muscles', JSON.stringify(data));
    });
  }

  getMuscles() : string[] {
    let storage: string | null = localStorage.getItem('muscles');
    if(storage){
      return JSON.parse(storage) as string[];
    }
    return [];
  }

  getDays() : Day[] {
    let storage: string | null = localStorage.getItem('days');
    if(storage){
      return JSON.parse(storage) as Day[];
    }
    return [];
  }
}

import { Exercise } from './../interfaces/exercise';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(
    private http: HttpClient
  ) { }

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

  saveExercises(days: Exercise[]) {
    localStorage.setItem('days', JSON.stringify(days));
  }
  
  setExercises() : void {
    this.http.get<Exercise[]>('../assets/exercises.json').subscribe((data) => {
      localStorage.setItem('exercises', JSON.stringify(data));
    });
  }
}

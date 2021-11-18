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

  saveExercises(days: Exercise[]) {
    localStorage.setItem('days', JSON.stringify(days));
  }
  
  setExercises() : void {
    this.http.get<Exercise[]>('../assets/exercises.json').subscribe((data) => {
      localStorage.setItem('exercises', JSON.stringify(data));
    });
  }
}

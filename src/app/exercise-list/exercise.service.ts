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

  saveExercises(exercises: Exercise[]) {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }
}

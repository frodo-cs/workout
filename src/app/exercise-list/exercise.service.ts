import { Exercise } from 'src/app/interfaces/exercise';
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

  deleteExercise(exercise: Exercise){
    let storage = localStorage.getItem('exercises');

    if(storage){
      let exercises: Exercise[] = JSON.parse(storage) as Exercise[];
      exercises = exercises.filter(x => x.id != exercise.id);
      this.saveExercises(exercises);
    }
  }

  updateExercise(exercise: Exercise) {
    let storage = localStorage.getItem('exercises');

    if(storage){
      let exercises: Exercise[] = JSON.parse(storage) as Exercise[];
      exercises = exercises.filter(x => x.id != exercise.id);
      exercises.push(exercise);
      this.saveExercises(exercises);
    }
  }
}

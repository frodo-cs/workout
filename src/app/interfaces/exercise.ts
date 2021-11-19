import { ExerciseSet } from "./exercise-set";

export interface Exercise {
    name: string,
    description: string,
    sets: ExerciseSet[],
    muscles: string[],
}
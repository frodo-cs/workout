import { ExerciseSet } from "./exercise-set";

export interface Exercise {
    id: number,
    name: string,
    description: string,
    sets: ExerciseSet[],
    muscles: string[],
}
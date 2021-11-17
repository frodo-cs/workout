import { Exercise } from "./exercise";

export interface Day {
    day: number,
    name: string,
    exercises: Exercise[],
}
import { Exercise } from "./exercise";

export interface Day {
    number: number,
    name: string,
    exercises: Exercise[],
}
import { Exercise } from "./exercise";

export interface Day {
    id: number,
    day: number,
    name: string,
    exercises: Exercise[],
}
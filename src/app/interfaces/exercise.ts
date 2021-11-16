import { Set } from "./set";

export interface Exercise {
    name: string,
    description: string,
    sets: Set[],
    muscles: string[],
}
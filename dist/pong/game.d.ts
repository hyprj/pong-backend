import { Paddle } from "./paddle";
import { Puck } from "./puck";
export declare class Pong {
    readonly puck: Puck;
    readonly left: Paddle;
    readonly right: Paddle;
    constructor(canvasWidth: number, canvasHeight: number);
}

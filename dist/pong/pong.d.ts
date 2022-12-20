import { IPlayer } from "./interfaces";
import { Paddle } from "./paddle";
import { Puck } from "./puck";
export declare class Pong {
    private readonly canvasWidth;
    private readonly canvasHeight;
    readonly puck: Puck;
    readonly left: Paddle;
    readonly right: Paddle;
    constructor(canvasWidth: number, canvasHeight: number, firstPlayer: IPlayer, secondPlayer: IPlayer);
    player(id: string): Paddle;
    update(): void;
    show(): {
        puck: {
            fill: number[];
            ellipse: number[];
        };
        left: {
            player: IPlayer;
            fill: number[];
            rectMode: string;
            rect: number[];
        };
        right: {
            player: IPlayer;
            fill: number[];
            rectMode: string;
            rect: number[];
        };
        leftScore: {
            text: number[];
        };
        rightScore: {
            text: number[];
        };
    };
}

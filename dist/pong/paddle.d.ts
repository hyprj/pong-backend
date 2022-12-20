import { IPlayer } from "./interfaces";
export declare class Paddle {
    readonly player: IPlayer;
    private readonly canvasWidth;
    private readonly canvasHeight;
    score: number;
    w: number;
    h: number;
    ychange: number;
    x: number;
    y: number;
    constructor(isLeft: boolean, player: IPlayer, canvasWidth: number, canvasHeight: number);
    update(): void;
    move(steps: number): void;
    show(): {
        player: IPlayer;
        fill: number[];
        rectMode: string;
        rect: number[];
    };
}

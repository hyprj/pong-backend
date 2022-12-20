import { Paddle } from "./paddle";
export declare class Puck {
    private readonly canvasWidth;
    private readonly canvasHeight;
    private x;
    private y;
    private xspeed;
    private yspeed;
    private r;
    constructor(canvasWidth: number, canvasHeight: number);
    checkPaddleLeft(p: Paddle): void;
    checkPaddleRight(p: Paddle): void;
    update(): {
        fill: number[];
        ellipse: number[];
    };
    reset(): void;
    edges(left: Paddle, right: Paddle): void;
    show(): {
        fill: number[];
        ellipse: number[];
    };
}

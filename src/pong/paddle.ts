import { IPlayer } from "./interfaces";
import { constrain, CENTER } from "./utils";

export class Paddle {
  score = 0;
  w = 20;
  h = 100;
  ychange = 0;
  x: number;
  y: number;

  constructor(
    isLeft: boolean,
    public readonly player: IPlayer,
    private readonly canvasWidth: number,
    private readonly canvasHeight: number
  ) {
    this.y = this.canvasHeight / 2;

    if (isLeft) {
      this.x = this.w;
    } else {
      this.x = this.canvasWidth - this.w;
    }
  }

  update() {
    this.y += this.ychange;
    this.y = constrain(this.y, this.h / 2, this.canvasHeight - this.h / 2);
  }

  move(steps: number) {
    this.ychange = steps;
  }

  show() {
    return {
      player: this.player,
      fill: [255],
      rectMode: CENTER,
      rect: [this.x, this.y, this.w, this.h],
    };
  }
}

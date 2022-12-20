import { Paddle } from "./paddle";
import { radians, map, cos, sin, random } from "./utils";

export class Puck {
  private x: number;
  private y: number;
  private xspeed = 0;
  private yspeed = 0;
  private r = 12;

  constructor(
    private readonly canvasWidth: number,
    private readonly canvasHeight: number
  ) {
    this.x = this.canvasWidth / 2;
    this.y = this.canvasHeight / 2;

    this.reset();
  }

  checkPaddleLeft(p: Paddle) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2
    ) {
      if (this.x > p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.h, -rad, rad);
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        this.x = p.x + p.w / 2 + this.r;
      }
    }
  }
  checkPaddleRight(p: Paddle) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x + this.r > p.x - p.w / 2
    ) {
      if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let angle = map(diff, 0, p.h, radians(225), radians(135));
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        this.x = p.x - p.w / 2 - this.r;
      }
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    return { fill: [255], ellipse: [this.x, this.y, this.r * 2] };
  }

  reset() {
    this.x = this.canvasWidth / 2;
    this.y = this.canvasHeight / 2;
    let angle = random(-Math.PI / 4, Math.PI / 4);
    this.xspeed = 5 * Math.cos(angle);
    this.yspeed = 5 * Math.sin(angle);
    const rand = random(0, 1);

    if (rand > 0.5) {
      this.xspeed *= -1;
    }
  }

  edges(left: Paddle, right: Paddle) {
    if (this.y < 0 || this.y > this.canvasHeight) {
      this.yspeed *= -1;
    }

    if (this.x - this.r > this.canvasWidth) {
      left.score++;
      this.reset();
    }

    if (this.x + this.r < 0) {
      right.score++;
      this.reset();
    }
  }

  show() {
    return {
      fill: [255],
      ellipse: [this.x, this.y, this.r * 2],
    };
  }
}

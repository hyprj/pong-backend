import { IPlayer } from "./interfaces";
import { Paddle } from "./paddle";
import { Puck } from "./puck";

export class Pong {
  readonly puck: Puck;
  readonly left: Paddle;
  readonly right: Paddle;

  constructor(
    private readonly canvasWidth: number,
    private readonly canvasHeight: number,
    firstPlayer: IPlayer,
    secondPlayer: IPlayer
  ) {
    this.puck = new Puck(this.canvasWidth, this.canvasHeight);
    this.left = new Paddle(
      true,
      firstPlayer,
      this.canvasWidth,
      this.canvasHeight
    );
    this.right = new Paddle(
      false,
      secondPlayer,
      this.canvasWidth,
      this.canvasHeight
    );
  }
  player(id: string): Paddle {
    if (this.left.player.id === id) {
      return this.left;
    } else if (this.right.player.id === id) {
      return this.right;
    } else {
      return undefined;
    }
  }

  update() {
    this.puck.checkPaddleRight(this.right);
    this.puck.checkPaddleLeft(this.left);
    this.puck.update();
    this.puck.edges(this.left, this.right);
    this.left.update();
    this.right.update();
  }

  show() {
    return {
      puck: this.puck.show(),
      left: this.left.show(),
      right: this.right.show(),
      leftScore: { text: [this.left.score, 32, 40] },
      rightScore: { text: [this.right.score, this.canvasWidth - 64, 40] },
    };
  }
}

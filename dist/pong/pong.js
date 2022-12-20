"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pong = void 0;
const paddle_1 = require("./paddle");
const puck_1 = require("./puck");
class Pong {
    constructor(canvasWidth, canvasHeight, firstPlayer, secondPlayer) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.puck = new puck_1.Puck(this.canvasWidth, this.canvasHeight);
        this.left = new paddle_1.Paddle(true, firstPlayer, this.canvasWidth, this.canvasHeight);
        this.right = new paddle_1.Paddle(false, secondPlayer, this.canvasWidth, this.canvasHeight);
    }
    player(id) {
        if (this.left.player.id === id) {
            return this.left;
        }
        else if (this.right.player.id === id) {
            return this.right;
        }
        else {
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
exports.Pong = Pong;
//# sourceMappingURL=pong.js.map
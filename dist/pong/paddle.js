"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paddle = void 0;
const utils_1 = require("./utils");
class Paddle {
    constructor(isLeft, player, canvasWidth, canvasHeight) {
        this.player = player;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.score = 0;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;
        this.y = this.canvasHeight / 2;
        if (isLeft) {
            this.x = this.w;
        }
        else {
            this.x = this.canvasWidth - this.w;
        }
    }
    update() {
        this.y += this.ychange;
        this.y = (0, utils_1.constrain)(this.y, this.h / 2, this.canvasHeight - this.h / 2);
    }
    move(steps) {
        this.ychange = steps;
    }
    show() {
        return {
            player: this.player,
            fill: [255],
            rectMode: utils_1.CENTER,
            rect: [this.x, this.y, this.w, this.h],
        };
    }
}
exports.Paddle = Paddle;
//# sourceMappingURL=paddle.js.map
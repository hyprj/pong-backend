"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puck = void 0;
const utils_1 = require("./utils");
class Puck {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.xspeed = 0;
        this.yspeed = 0;
        this.r = 12;
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight / 2;
        this.reset();
    }
    checkPaddleLeft(p) {
        if (this.y - this.r < p.y + p.h / 2 &&
            this.y + this.r > p.y - p.h / 2 &&
            this.x - this.r < p.x + p.w / 2) {
            if (this.x > p.x) {
                let diff = this.y - (p.y - p.h / 2);
                let rad = (0, utils_1.radians)(45);
                let angle = (0, utils_1.map)(diff, 0, p.h, -rad, rad);
                this.xspeed = 5 * (0, utils_1.cos)(angle);
                this.yspeed = 5 * (0, utils_1.sin)(angle);
                this.x = p.x + p.w / 2 + this.r;
            }
        }
    }
    checkPaddleRight(p) {
        if (this.y - this.r < p.y + p.h / 2 &&
            this.y + this.r > p.y - p.h / 2 &&
            this.x + this.r > p.x - p.w / 2) {
            if (this.x < p.x) {
                let diff = this.y - (p.y - p.h / 2);
                let angle = (0, utils_1.map)(diff, 0, p.h, (0, utils_1.radians)(225), (0, utils_1.radians)(135));
                this.xspeed = 5 * (0, utils_1.cos)(angle);
                this.yspeed = 5 * (0, utils_1.sin)(angle);
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
        let angle = (0, utils_1.random)(-Math.PI / 4, Math.PI / 4);
        this.xspeed = 5 * Math.cos(angle);
        this.yspeed = 5 * Math.sin(angle);
        const rand = (0, utils_1.random)(0, 1);
        if (rand > 0.5) {
            this.xspeed *= -1;
        }
    }
    edges(left, right) {
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
exports.Puck = Puck;
//# sourceMappingURL=puck.js.map
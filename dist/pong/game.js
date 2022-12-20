"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pong = void 0;
const puck_1 = require("./puck");
class Pong {
    constructor(canvasWidth, canvasHeight) {
        this.puck = new puck_1.Puck(canvasWidth, canvasHeight);
    }
}
exports.Pong = Pong;
//# sourceMappingURL=game.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.CENTER = exports.cos = exports.sin = exports.random = exports.map = exports.constrain = exports.radians = void 0;
const radians = function (deg) {
    return (deg * Math.PI) / 180.0;
};
exports.radians = radians;
const constrain = function (n, low, high) {
    return Math.max(Math.min(n, high), low);
};
exports.constrain = constrain;
const map = function (n, start1, stop1, start2, stop2, withinBounds) {
    const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    if (!withinBounds) {
        return newval;
    }
    if (start2 < stop2) {
        return this.constrain(newval, start2, stop2);
    }
    else {
        return this.constrain(newval, stop2, start2);
    }
};
exports.map = map;
const random = function (min, max) {
    if (arguments.length === 1) {
        const min = 0;
        max = arguments[0];
    }
    return Math.random() * (max - min) + min;
};
exports.random = random;
exports.sin = Math.sin;
exports.cos = Math.cos;
exports.CENTER = "center";
exports.PI = Math.PI;
//# sourceMappingURL=utils.js.map
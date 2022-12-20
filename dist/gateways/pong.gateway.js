"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PongGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const pong_1 = require("../pong/pong");
let PongGateway = class PongGateway {
    constructor() {
        this.sockets = [];
        setInterval(() => {
            if (this.sockets.length === 0) {
                return;
            }
            if (this.sockets.length >= 2 && !this.game) {
                this.game = new pong_1.Pong(600, 400, this.sockets[0], this.sockets[1]);
            }
            if (this.game) {
                this.game.update();
                this.server.emit("pong.cast", this.game.show());
            }
        }, 15);
    }
    onModuleInit() {
        this.server.on("connection", (socket) => {
            console.log("Pong socket connected", socket.id);
            this.server.emit("pong.members", this.sockets);
            socket.on("disconnecting", () => {
                var _a;
                this.sockets = this.sockets.filter((s) => s.id !== socket.id);
                this.server.emit("pong.members", this.sockets);
                if ((_a = this.game) === null || _a === void 0 ? void 0 : _a.player(socket.id)) {
                    this.game = null;
                }
            });
        });
    }
    onPlayerJoin(client, name) {
        console.log(`client.id ${client.id} join with name: ${name}`);
        this.sockets.push({ id: client.id, name });
        this.server.emit("pong.members", this.sockets);
    }
    onPlayerMove(client, key) {
        var _a;
        const paddle = (_a = this.game) === null || _a === void 0 ? void 0 : _a.player(client.id);
        if (!paddle) {
            return;
        }
        switch (key) {
            case "ArrowUp":
                paddle.move(-10);
                break;
            case "ArrowDown":
                paddle.move(10);
                break;
            default:
                paddle.move(0);
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PongGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("pong.join"),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], PongGateway.prototype, "onPlayerJoin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("pong.move"),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], PongGateway.prototype, "onPlayerMove", null);
PongGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: "*",
        },
    }),
    __metadata("design:paramtypes", [])
], PongGateway);
exports.PongGateway = PongGateway;
//# sourceMappingURL=pong.gateway.js.map
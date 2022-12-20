import { OnModuleInit } from "@nestjs/common";
import { Server, Socket } from "socket.io";
export declare class PongGateway implements OnModuleInit {
    private game;
    constructor();
    private sockets;
    onModuleInit(): void;
    server: Server;
    onPlayerJoin(client: Socket, name: string): void;
    onPlayerMove(client: Socket, key: string): void;
}

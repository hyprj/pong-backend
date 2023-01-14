import { OnModuleInit } from "@nestjs/common";
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
// interface IGame {
//   puck: Puck;
//   left: Paddle;
//   right: Paddle;
// }

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class PongGateway implements OnModuleInit {
  //   private game: Pong;

  constructor() {
    // setInterval(() => {
    //   if (this.sockets.length === 0) {
    //     return;
    //   }
    //   if (this.sockets.length >= 2 && !this.game) {
    //     this.game = new Pong(600, 400, this.sockets[0], this.sockets[1]);
    //   }
    //   if (this.game) {
    //     this.game.update();
    //     this.server.emit("pong.cast", this.game.show());
    //   }
    // }, 15);
  }

  private sockets: { id: string; name: string }[] = [];

  onModuleInit() {
    // this.server.on("connection", (socket) => {
    //   console.log("Pong socket connected", socket.id);
    //   this.server.emit("pong.members", this.sockets);
    //   socket.on("disconnecting", () => {
    //     this.sockets = this.sockets.filter((s) => s.id !== socket.id);
    //     this.server.emit("pong.members", this.sockets);
    //     if (this.game?.player(socket.id)) {
    //       this.game = null;
    //     }
    //   });
    // });
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage("chat-message")
  onPlayerJoin(@ConnectedSocket() client: Socket, @MessageBody() data: string) {
    console.log(`client.id ${client.id} sent message: ${data}`);
    client.broadcast.emit("chat-message", data);
    // this.sockets.push({ id: client.id, name });
    // this.server.emit("pong.members", this.sockets);
  }

  @SubscribeMessage("pong.move")
  onPlayerMove(@ConnectedSocket() client: Socket, @MessageBody() key: string) {
    //     const paddle = this.game?.player(client.id);
    //     if (!paddle) {
    //       return;
    //     }
    //     switch (key) {
    //       case "ArrowUp":
    //         paddle.move(-10);
    //         break;
    //       case "ArrowDown":
    //         paddle.move(10);
    //         break;
    //       default:
    //         paddle.move(0);
    //     }
  }
}

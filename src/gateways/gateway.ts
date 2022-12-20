import { OnModuleInit } from "@nestjs/common";
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class MyGateway implements OnModuleInit {
  onModuleInit() {
    // this.server.on("connection", (socket) => {
    //   console.log(socket.id);
    //   console.log("connected");
    // });
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage("newMsg")
  onNewMsg(@MessageBody() body: unknown) {
    // console.log(body);
    // this.server.emit("newMessage", { msg: "New message", content: body });
  }
}

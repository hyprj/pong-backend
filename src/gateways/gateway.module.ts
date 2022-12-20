import { Module } from "@nestjs/common";
import { MyGateway } from "./gateway";
import { PongGateway } from "./pong.gateway";

@Module({
  imports: [],
  providers: [MyGateway, PongGateway],
})
export class GatewayModule {
  constructor() {}
}

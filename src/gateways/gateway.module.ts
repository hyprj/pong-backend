import { Module } from "@nestjs/common";
import { PongGateway } from "./pong.gateway";

@Module({
  imports: [],
  providers: [PongGateway],
})
export class GatewayModule {
  constructor() {}
}

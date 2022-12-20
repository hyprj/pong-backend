import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppMiddleware } from "./app.middleware";
import { GatewayModule } from "./gateways/gateway.module";

@Module({
  imports: [GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL }); // apply on all routes
  }
}

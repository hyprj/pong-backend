import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GatewayModule } from "./gateways/gateway.module";

@Module({
  imports: [GatewayModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    // .apply(AppMiddleware)
    // .forRoutes({ path: "*", method: RequestMethod.ALL }); // apply on all routes
  }
}

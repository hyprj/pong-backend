import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { OutputInterceptor } from './output.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
  });
  app.useGlobalInterceptors(new OutputInterceptor());
  await app.listen(3000);
}
bootstrap();

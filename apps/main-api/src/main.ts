import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const port = Number(process.env.PORT) || 3000;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: "localhost",
      port,
    },
  });
  await app.listen();
  Logger.log(`🚀 Microservice application is running on: http://localhost:${port}`);
}

bootstrap();

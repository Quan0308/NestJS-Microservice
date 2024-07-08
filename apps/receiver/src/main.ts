/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const configService = new ConfigService();

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [configService.get("RMQ_URLS")],
      queue: configService.get("RMQ_QUEUE"),
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
  Logger.log(`🚀 Receiver is running`);
}

bootstrap();

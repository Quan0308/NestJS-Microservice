import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { RabbitmqService } from "./rabbitmq.service";

@Module({
  providers: [
    {
      provide: "RMQ_SERVICE",
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get("RMQ_URLS")],
            queue: configService.get("RMQ_QUEUE"),
            queueOptions: {
              durable: false,
            },
          },
        });
      },
      inject: [ConfigService],
    },
    RabbitmqService,
  ],
})
export class RabbitmqModule {}

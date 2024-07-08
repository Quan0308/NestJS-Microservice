import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RabbitmqModule } from "@shared_modules";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RabbitmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

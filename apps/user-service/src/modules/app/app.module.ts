import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "../database/database.module";
import { RabbitmqModule } from "@shared_modules";
import { AppService } from "./app.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, RabbitmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

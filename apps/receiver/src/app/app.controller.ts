import { Controller } from "@nestjs/common";

import { AppService } from "./app.service";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @MessagePattern({ cmd: 'sum' })
  async getData(@Payload() data: number[]): Promise<number> {
    console.log('Received data:', data);
    const sum = data.reduce((a, b) => a + b, 0);
    return sum;
  }
}

import { Controller, Get, Inject } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('send')
  send(): { message: string } {
    return this.appService.send();
  }
}

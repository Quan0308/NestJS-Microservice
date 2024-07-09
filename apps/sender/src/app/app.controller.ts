import { Controller, Get, Inject } from "@nestjs/common";

import { AppService } from "./app.service";
import { Observable } from "rxjs";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('send')
  async send(): Promise<number> {
    return await this.appService.send();
  }
}

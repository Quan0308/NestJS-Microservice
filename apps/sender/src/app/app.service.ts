import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
  constructor(
    @Inject("RMQ_SERVICE") 
    private rmqClient: ClientProxy,
  ){}

  async onApplicationBootstrap() {
    await this.rmqClient.connect();
  }

  send(): { message: string } {
    const data = `Hello World at ${new Date().toISOString()}`;
    this.rmqClient.emit('message', data);
    return { message: data };
  }
}

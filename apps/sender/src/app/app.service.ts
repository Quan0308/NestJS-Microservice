import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom, Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(
    @Inject("RMQ_SERVICE") 
    private rmqClient: ClientProxy,
  ){}

  async onApplicationBootstrap() {
    await this.rmqClient.connect();
  }

  async send(): Promise<number> {
    // const data = `Hello World at ${new Date().toISOString()}`;
    const data = [1, 69];
    const rawResult = this.rmqClient.send({ cmd: 'sum' }, data);
    const result = await firstValueFrom(rawResult);
    console.log('Result:', result);
    return result;  
  }
}

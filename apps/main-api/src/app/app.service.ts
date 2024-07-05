import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject("RMQ_SERVICE") private client: ClientProxy) {}

  async onModuleInit() {
    try {
      await this.client.connect();
      this.client.emit<any>("testEvent", "Test message").subscribe({
        next: (val) => console.log(`next: ${val}`),
        error: (err) => console.log(`error: ${err}`),
        complete: () => console.log("complete"),
      });
    } catch (error) {
      console.log(error);
    }
  }

  getData(): { message: string } {
    return { message: "Hello API" };
  }
}

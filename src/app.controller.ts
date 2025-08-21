import { Controller, Get } from '@nestjs/common';
import type { Greeting } from './greeting/greeting.interface';
import { GreetingService } from './greeting/greeting.service';

@Controller()
export class AppController {
  constructor(private readonly greetingService: GreetingService) {}

  @Get()
  getHello(): Greeting {
    return this.greetingService.greet();
  }
}

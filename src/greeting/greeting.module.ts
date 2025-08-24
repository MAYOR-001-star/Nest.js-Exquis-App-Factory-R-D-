import { Module } from '@nestjs/common';
import { GreetingService } from './greeting.service';

@Module({
  providers: [GreetingService],
})
export class GreetingModule {}

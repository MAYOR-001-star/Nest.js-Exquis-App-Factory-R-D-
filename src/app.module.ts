import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GreetingModule } from './greeting/greeting.module';

@Module({
  imports: [GreetingModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

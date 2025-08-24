import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { GreetingModule } from './greeting/greeting.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GreetingModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

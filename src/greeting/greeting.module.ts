import { Module } from '@nestjs/common';
import { GreetingService } from './greeting.service';
import { EmojiService } from 'src/emoji/emoji.service';

@Module({
  providers: [GreetingService, EmojiService],
  exports: [GreetingService],
})
export class GreetingModule {}

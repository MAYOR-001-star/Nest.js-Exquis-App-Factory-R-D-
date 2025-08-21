import { Injectable } from '@nestjs/common';
import type { Greeting } from './greeting.interface';
import { EmojiService } from 'src/emoji/emoji.service';

@Injectable()
export class GreetingService {
  constructor(private readonly emojiService: EmojiService) {}
  greet(): Greeting {
    const greeting: string =
      'Greetings to you over there' + ' ' + this.emojiService.emoji;
    return { greeting };
  }
}

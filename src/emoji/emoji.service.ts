import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class EmojiService {
  public readonly emoji: string;

  constructor() {
    const emoji = '🤦‍♀️🙌👍';
    const index = Math.floor(Math.random() * emoji.length);
    this.emoji = emoji.charAt(index);
  }
}

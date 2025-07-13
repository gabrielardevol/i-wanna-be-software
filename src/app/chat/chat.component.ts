import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {ConfettiBackgroundComponent} from 'confettti';
import {ChatInputComponent} from './chat-input.component';
import {ChatStore} from '../services/chat.store';
import {AsyncPipe, NgForOf, NgStyle} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-chat',
  imports: [
    ConfettiBackgroundComponent,
    ChatInputComponent,
    AsyncPipe,
    NgForOf,
    NgStyle,
    TranslatePipe
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @ViewChildren('scrollDown') scrollTargets!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.scrollToBottom();
    console.log('this.scrollTargets', this.scrollTargets)
  }

  scrollToBottom() {
    this.scrollTargets.forEach((elRef: ElementRef) => {
      const el = elRef.nativeElement as HTMLElement;
      el.scrollTop = el.scrollHeight;
    });
  }

  constructor(
    public chatStore: ChatStore,
  ) {
  }

}

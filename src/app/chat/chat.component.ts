import {Component, ElementRef, ViewChild} from '@angular/core';
import {ChatInputComponent} from './chat-input.component';
import {ChatStore, MessageModel} from '../services/chat.store';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../components/loader.component';

@Component({
  selector: 'app-chat',
  imports: [
    ChatInputComponent,
    NgForOf,
    LoaderComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @ViewChild('lastMessageContainer') lastMessageContainer!: ElementRef;
  messages: MessageModel[] = []
  lastMessage: MessageModel | undefined = undefined;
  imgChar: string = "";
  emotion: string = "[neutral]"

  constructor(
    public chatStore: ChatStore,
  ) {
  }

  ngOnInit() {
    this.chatStore.messages$.subscribe(messages => {
      this.scrollToBottom()
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === 'assistant') {
        setTimeout(() => {
          this.lastMessage = lastMsg;
          this.messages = messages;
          this.typeLastMessage()
        }, 1000);
      } else {
        this.lastMessage = lastMsg;
        this.messages = messages;
      }
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    let scrollTargets = document.querySelectorAll(".confetti-container"); //TECNICAL DEBT
    scrollTargets.forEach((elRef: Element) => {
      const el = elRef as HTMLElement;
      el.scrollTop = el.scrollHeight;
    });

    document.body.scrollTop = document.body.scrollHeight
  }

  private typeLastMessage() {
    const element = this.lastMessageContainer.nativeElement;
    if (!element || !this.lastMessage?.content) return;

    element.textContent = '';

    const text = this.lastMessage.content;
    let i = 0;

    const interval = setInterval(() => {
      if (text.charAt(i) == "[") {

        while (text.charAt(i) != "]") {
          this.emotion += text.charAt(i);
          i++;
        }
        this.emotion += text.charAt(i);
        i++;
      } else {
        this.lastMessageContainer.nativeElement.style.border = '1px solid'
        element.textContent += text.charAt(i);
        if (['a', 'e', 'i', 'o', 'u', ' '].includes(text.charAt(i))) {
          this.imgChar = text.charAt(i);
        }
        i++;
      }

      this.scrollToBottom()

      if (i >= text.length) {
        this.imgChar = '.';
        clearInterval(interval);
      }
    }, 60);
  }
}

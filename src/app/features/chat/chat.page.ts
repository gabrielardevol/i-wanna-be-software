import {Component, ElementRef, ViewChild} from '@angular/core';
import {ChatInputComponent} from './chat-input.component';
import {ChatStore, MessageModel} from './services/chat.store';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {LoaderComponent} from '../../components/loader.component';
import {ChatAvatarComponent} from './chat-avatar.component';

@Component({
  selector: 'app-chat',
  imports: [
    ChatInputComponent,
    NgForOf,
    LoaderComponent,
    NgIf,
    NgClass,
    ChatAvatarComponent
  ],
  templateUrl: './chat.page.html',
  styleUrl: './chat.page.scss'
})
export class ChatPage {
  @ViewChild('lastMessageContainer') lastMessageContainer!: ElementRef;
  messages: MessageModel[] = []
  lastMessage: MessageModel | undefined = undefined;
  imgChar: string = "";
  emotion: string = "[neutral]"
  disabled: boolean = false;

  constructor(
    public chatStore: ChatStore,
  ) {
  }

  async ngOnInit() {
    this.chatStore.messages$.subscribe(messages => {
      this.scrollToBottom()
      this.disabled = true;
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.role === 'assistant') {
        setTimeout(async () => {
          this.lastMessage = lastMsg;
          this.messages = messages;
          this.typeLastMessage()
        }, 1000);
      } else {
        this.lastMessage = lastMsg;
        this.messages = messages;
      }

    });
    this.scrollToBottom();

  }

  ngAfterViewChecked() {
    // this.scrollToBottom();
  }

  scrollToBottom() {
    //TECNICAL DEBT
    let scrollTargets = document.querySelectorAll(".confetti-container");
    console.log("scrollTargets", scrollTargets)
    //TECNICAL DEBT
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

      if (i >= text.length) {
        this.imgChar = '.';
        clearInterval(interval);
        this.disabled = false
      }
    }, 60);
  }

  removeEmotionNotation(content: string) {
    return content.replace(/\[[^\]]*\]/g, '').trim();
  }
}

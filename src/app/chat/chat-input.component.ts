import { Component } from '@angular/core';
import {ConfettiBackgroundComponent} from 'confettti';
import {AsyncPipe} from '@angular/common';
import {ChatStore} from '../services/chat.store';

@Component({
  selector: 'app-chat-input',
  imports: [
    ConfettiBackgroundComponent,
    AsyncPipe
  ],
  template: `
    <div style="display: flex; justify-content: end; position: sticky; width: 100%; align-items: end">
      <img style="object-fit: contain; height: 250px; width: 50%; position: absolute; z-index: -10" src="gabru.png">
      <form style="display: flex; height: 40px; gap: 8px; width: 100%; margin: 20px 0;">
        <input #chatInput class="confetti-border confetti-button-light" style="padding: 12px; border-radius: 10000px; flex: 1; aspect-ratio: 1 / 1" type="text">

        <confetti-background [density]="40" style="background: var(--dark-button-background); aspect-ratio: 1/1; color: var(--dark-button-text-color); border-radius: 12px">
          <button (click)="$event.preventDefault(); chatStore.sendMessage(chatInput.value); chatInput.value = ''" style="aspect-ratio: 1/1; width: 100%; ">
            <i class="bi bi-send-fill" style="color: var(--dark-button-text-color)"></i>
          </button>
        </confetti-background>
      </form>
    </div>

  `,
  styleUrl: './chat.component.scss'
})
export class ChatInputComponent {
  constructor(
    public chatStore: ChatStore,

  ) {
  }

}

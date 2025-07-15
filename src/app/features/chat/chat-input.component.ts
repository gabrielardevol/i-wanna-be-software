import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ConfettiBackgroundComponent} from 'confettti';
import {AsyncPipe, NgIf} from '@angular/common';
import {ChatStore} from './services/chat.store';

@Component({
  selector: 'app-chat-input',
  imports: [
    ConfettiBackgroundComponent,
    NgIf
  ],
  styles: [`
    :host {
      display: flex; justify-content: end; position: sticky; width: 100%; align-items: end
    }
  `],
  template: `
      <form style="display: flex; height: 48px; gap: 8px; width: 100%;">
        <input #chatInput class="confetti-border confetti-button-light" style="padding: 12px; border-radius: 10000px; flex: 1; aspect-ratio: 1 / 1" type="text">

        <confetti-background [density]="40" style="background: var(--dark-button-background); aspect-ratio: 1/1; color: var(--dark-button-text-color); border-radius: 12px">
          <button [disabled]="disabled" (click)="$event.preventDefault(); chatStore.sendMessage(chatInput.value); chatInput.value = ''" style="aspect-ratio: 1/1; width: 100%; ">
            <i class="bi bi-send-fill" style="color: var(--dark-button-text-color)"></i>
          </button>
        </confetti-background>
      </form>
  `,
  styleUrl: './chat.component.scss'
})
export class ChatInputComponent {

  @ViewChild('chatImg') chatImg!: ElementRef;

  @Input() disabled: boolean = false;

  constructor(
    public chatStore: ChatStore,
  ) {
  }

}

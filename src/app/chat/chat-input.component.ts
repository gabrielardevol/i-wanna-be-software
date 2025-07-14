import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ConfettiBackgroundComponent} from 'confettti';
import {AsyncPipe, NgIf} from '@angular/common';
import {ChatStore} from '../services/chat.store';

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

      <img #chatImg style="object-fit: contain; height: 300px; position: absolute; z-index: -10"
           src="gabru.png">
      <img *ngIf="char.toLowerCase() == 'a'" #chatImg style="object-fit: contain; height: 300px; position: absolute; z-index: -10"
           src="a.png">
      <img *ngIf="char.toLowerCase() == 'e'" #chatImg style="object-fit: contain; height: 300px; position: absolute; z-index: -10"
           src="e.png">
      <img *ngIf="char.toLowerCase() == 'i'" #chatImg style="object-fit: contain; height: 300px; position: absolute; z-index: -10"
           src="i.png">
      <img *ngIf="char.toLowerCase() == 'o'" #chatImg style="object-fit: contain; height: 300px; position: absolute; z-index: -10"
           src="o.png">
      <img *ngIf="char.toLowerCase() == 'u'" #chatImg style="object-fit: contain; height: 300px; position: absolute; z-index: -10"
           src="u.png">

      <form style="display: flex; height: 48px; gap: 8px; width: 100%; margin: 28px 0;">
        <input #chatInput class="confetti-border confetti-button-light" style="padding: 12px; border-radius: 10000px; flex: 1; aspect-ratio: 1 / 1" type="text">

        <confetti-background [density]="40" style="background: var(--dark-button-background); aspect-ratio: 1/1; color: var(--dark-button-text-color); border-radius: 12px">
          <button (click)="$event.preventDefault(); chatStore.sendMessage(chatInput.value); chatInput.value = ''" style="aspect-ratio: 1/1; width: 100%; ">
            <i class="bi bi-send-fill" style="color: var(--dark-button-text-color)"></i>
          </button>
        </confetti-background>
      </form>

  `,
  styleUrl: './chat.component.scss'
})
export class ChatInputComponent {

  @ViewChild('chatImg') chatImg!: ElementRef;
  @Input() char!: string;
  @Input() emotion!: string;

  constructor(
    public chatStore: ChatStore,

  ) {
  }

}

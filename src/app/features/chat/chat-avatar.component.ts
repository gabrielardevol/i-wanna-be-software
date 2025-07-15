import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ConfettiBackgroundComponent} from 'confettti';
import {AsyncPipe, NgIf} from '@angular/common';
import {ChatStore} from './services/chat.store';

@Component({
  selector: 'app-chat-avatar',
  imports: [
    NgIf
  ],
  styles: [`
    //:host {
    //  display: flex; justify-content: end; position: sticky; width: 100%; align-items: end
    //}
  `],
  template: `

      <img style="object-fit: contain; height: 300px; position: absolute; z-index: -10"
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

  `,
  styleUrl: './chat.component.scss'
})
export class ChatAvatarComponent {

  @Input() char!: string;
  @Input() emotion!: string;

  constructor(
    // public chatStore: ChatStore,

  ) {
  }

}

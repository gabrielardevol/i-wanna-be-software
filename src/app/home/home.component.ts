import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {ConfettiBackgroundComponent, FillersContainerComponent} from "confettti";
import {ChatInputComponent} from '../chat/chat-input.component';

@Component({
  selector: 'app-home',
  imports: [
    ConfettiBackgroundComponent,
    FillersContainerComponent,
    ChatInputComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
}

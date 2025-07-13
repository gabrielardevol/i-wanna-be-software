import {Component, ElementRef, HostListener} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ConfettiBackgroundComponent, ConfettiLayout, FillersContainerComponent} from 'confettti';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    HomeComponent,
    RouterLink,
    ConfettiLayout,
    NgIf,
    ConfettiBackgroundComponent,
    FillersContainerComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menu: boolean = false;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {
    console.log('LayoutComponent');
  }


  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
      this.menu = false;

  }
}

import {Component, ElementRef, HostListener} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ConfettiBackgroundComponent, ConfettiLayout, FillersContainerComponent} from 'confettti';
import {NgIf, NgStyle} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    ConfettiLayout,
    NgIf,
    ConfettiBackgroundComponent,
    FillersContainerComponent,
    NgStyle,
    TranslatePipe
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menu: boolean = false;
  routes: string[] = ['about', 'stack', 'projects', 'cv'];

  constructor(private eRef: ElementRef, readonly router: Router, ) {}

  ngOnInit() {
  }


  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
      this.menu = false;

  }

  goToNextPage(): void {
    console.log('LayoutComponent');

    const index = this.routes.indexOf(this.router.url);
    if (index !== -1 && index < this.routes.length - 1) {
      const next = this.routes[index + 1];
      console.log(next)
      this.router.navigate([next]);
    }
  }

  goToPrevPage(): void {
    console.log('LayoutComponent');

    const index = this.routes.indexOf(this.router.url);
    if (index > 0) {
      const prev = this.routes[index - 1];
      console.log(prev)
      this.router.navigate([prev]);
    }
  }
}

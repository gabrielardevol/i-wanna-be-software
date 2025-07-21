import {Component, ElementRef, HostListener} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ConfettiBackgroundComponent, ConfettiLayout, FillersContainerComponent} from 'confettti';
import {NgClass, NgIf, NgStyle} from '@angular/common';
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
    TranslatePipe,
    NgClass
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menu: 'right' | 'left' | null = null;
  routes: string[] = ['/about', '/stack', '/cv'];

  constructor(private eRef: ElementRef, readonly router: Router, ) {}


  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
      this.menu = null;

  }

  goToNextPage(): void {

    const index = this.routes.indexOf(this.router.url);
    if (index !== -1 && index < this.routes.length - 1) {
      const next = this.routes[index + 1];
      console.log(next)
      this.router.navigate([next]);
    }
  }

  goToPrevPage(): void {

    const index = this.routes.indexOf(this.router.url);
    if (index > 0) {
      const prev = this.routes[index - 1];
      console.log(prev)
      this.router.navigate(['/'+prev]).then(r =>
      {console.log("hola")});
    }
  }

  protected readonly location = location;
}

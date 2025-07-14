import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
    <div class="loader"></div> `,
  styles: `
.loader {
  width: 30px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,var(--confetti-primary) 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
}
@keyframes l1 {to{clip-path: inset(0 -34% 0 0)}}`
})
export class LoaderComponent {

}

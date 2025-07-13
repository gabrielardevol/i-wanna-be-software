import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConfettiBackgroundComponent, ConfettiLayout, FillersContainerComponent} from 'confettti';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  imports: [
    ConfettiLayout,
    ConfettiBackgroundComponent,
    FillersContainerComponent,
    RouterOutlet,
    TranslateModule
  ],
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: [`
`]
})

export class AppComponent {
  title = 'guanina';

  constructor(private translate: TranslateService) {
    const lang = navigator.language.startsWith('ca')
      ? 'ca'
      : navigator.language.startsWith('es')
        ? 'es'
        : navigator.language.startsWith('nl')
          ? 'nl'
           : 'en';

    translate.setDefaultLang('en');
    translate.use(lang);
    console.log('lang' , lang)
  }

}

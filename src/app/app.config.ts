import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {chatReducer} from './services/chat.store';
import {ChatEffects} from './services/chat.effects';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './services/translate-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ chat: chatReducer }),
    provideEffects([ChatEffects]),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })

    )
  ]
};



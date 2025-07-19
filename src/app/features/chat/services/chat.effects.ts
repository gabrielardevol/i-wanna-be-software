import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {sendMessage, receiveMessage, selectMessages} from './chat.store';
import { ChatApi } from './chat.api';
import {switchMap, map, catchError, tap, withLatestFrom} from 'rxjs/operators';
import { of } from 'rxjs';
import {Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class ChatEffects {
  private actions$ = inject(Actions);
  private readonly chatService = inject(ChatApi);
  private readonly store = inject(Store);

  constructor(private translate: TranslateService) {
  }
  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendMessage),
      switchMap(({ message }) =>
        this.chatService.callGroqApi(message.content).pipe(
          map(responseText => receiveMessage({
            message: { 'content': responseText, 'role': 'assistant' }
          })),
          catchError(() => of(receiveMessage({
            message: { 'content': this.translate.instant("llm_api.error"), 'role': 'assistant' }
          })))
        )
      )
    );
  });

  persistMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendMessage, receiveMessage),
      withLatestFrom(this.store.select(selectMessages)),
      tap(([_, messages]) => {
        localStorage.setItem('chats', JSON.stringify(messages));
      })
    );
  }, { dispatch: false });
}

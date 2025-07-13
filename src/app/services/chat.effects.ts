import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { sendMessage, receiveMessage } from './chat.store';
import { ChatService } from './chat.service';
import {switchMap, map, catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
// export class ChatEffects {
//   // Effect que només fa console.log
//   // constructor(private readonly actions$: Actions) {}
//   private actions$ = inject(Actions);
//
//   logSendMessage$ = createEffect(
//     () =>
//
//       this.actions$!.pipe(
//         ofType(sendMessage),
//         tap(({ message }) => {
//           console.log('Missatge enviat pel user:', message.text);
//         })
//       ),
//     { dispatch: false } // No volem retornar cap acció nova
//   );
// }
export class ChatEffects {
  private actions$ = inject(Actions);
  private readonly chatService = inject(ChatService);

  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendMessage),
      switchMap(({ message }) =>
        this.chatService.callGroqApi(message.content).pipe(
          map(responseText => receiveMessage({
            message: { 'content': responseText, 'role': 'assistant' }
          })),
          catchError(() => of(receiveMessage({
            message: { 'content': 'Error al contactar amb la IA', 'role': 'assistant' }
          })))
        )
      )
    );
  });

  // constructor(
  //   private readonly actions$: Actions,
  //   private readonly chatService: ChatService
  // ) {}
}

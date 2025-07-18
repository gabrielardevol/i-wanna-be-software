// chat.api.ts
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map, take} from 'rxjs';
import {environment} from '../../../../../environment';
import {ChatStore} from './chat.store';
import {switchMap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class ChatApi {
  private apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

  constructor(private http: HttpClient, private chatStore: ChatStore, private translate: TranslateService) {
  }

  callGroqApi(userMessage: string): Observable<string> {
    console.log('userMessage from chat.api.ts', userMessage)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.gorqApiKey}`,
    });

    return this.chatStore.messages$.pipe(
      take(1),
      switchMap(messagesFromStore => {
        const body = {
          model: 'llama-3.3-70b-versatile',
          // model: 'meta-llama/llama-4-scout-17b-16e-instruct',
          messages: [
            ...messagesFromStore,
            {role: 'user', content: userMessage},
            {role: 'system', content: this.translate.instant('llm_prompt.system_message') + this.translate.instant('llm_prompt.emotion_specs') + this.translate.instant('llm_prompt.emotion_enum') + this.translate.instant('llm_prompt.cv')}
          ]
        };

        return this.http.post<any>(this.apiUrl, body, {headers});

      }),
      map(response => response.choices[0].message.content)
    );
  }
}

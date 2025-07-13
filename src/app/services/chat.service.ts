// chat.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map, take} from 'rxjs';
import {environment} from '../../../environment';
import {ChatStore} from './chat.store';
import {switchMap} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

  constructor(private http: HttpClient, private chatStore: ChatStore) { }

  callGroqApi(userMessage: string): Observable<string> {
    console.log("calling groq api");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.gorqApiKey}`,
    });

    return this.chatStore.messages$.pipe(
      take(1), // agafa només el valor actual
      switchMap(messagesFromStore => {
        const body = {
          model: 'llama-3.3-70b-versatile',
          messages: [
            ...messagesFromStore,
            { role: 'user', content: userMessage },
            { role: 'system', content: this.systemMessage }
          ]
        };

        return this.http.post<any>(this.apiUrl, body, { headers });
      }),
      map(response => response.choices[0].message.content)
    );
  }
  private systemMessage: string = `Comporta't com si fossis jo, simula que estàs parlant amb algú que vol coneixer el teu perfil professional. Utilitza un to informal però correcte. Respon de manera breu sempre que sigui possible, que les teves respostes siguin d'una frase o dues. Basa't en la següent informació:

Fullstack v-type profile
interested in the intersection
between software and design,
experimentation and expertise,
playfulness and proficiency.
Experience
Software Developer at Brandmanic 
10/2023 - 3/2025, Valencia
i Angular Materiac
i SOLID principles, componentizatio^
i UX/UI, Design Systems, layouts,
prototyping
i Domain-driven Design (DDDo
i Meta APu
i Marketing lingo
Other work experience: restoring churches, making wine and delivering Christmas trees.

 Fullstack Bootcamp Aspasi+
i Barcelona, spring 2023

Fullstack Bootcamp Le Wago4
i Barcelona, Summer 2022

Bachelor's Degree in Arts and Design Escola Massan+
i Barcelona, 2014 - 2019
Stack
i Angular, 1.5+ yearU
i Typescript, 1.5+ yearU
i Tailwind, 1.5+ yearU
i Figma. 1.5+ yearU
i PHP, 1 yea\`
i Symphony, 1 year
LANGUAGES
Spanish Native

Catalan Native

English Profesional
Volunteering
Awwwards, Valencia. September 2024

Migracode, Barcelona. 2023

Esclat Associació, Barcelona,

Summer 2023
+34 646 18 16 10

artsdevol@gmail.com
 Valencia | Barcelona | Tarragona `;

}

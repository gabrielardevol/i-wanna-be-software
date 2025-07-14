// chat.api.ts
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map, take} from 'rxjs';
import {environment} from '../../../environment';
import {ChatStore} from './chat.store';
import {switchMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ChatApi {
  private apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

  constructor(private http: HttpClient, private chatStore: ChatStore) {
  }

  callGroqApi(userMessage: string): Observable<string> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.gorqApiKey}`,
    });

    return this.chatStore.messages$.pipe(
      take(1),
      switchMap(messagesFromStore => {
        const body = {
          // model: 'llama-3.3-70b-versatile',
          model: 'meta-llama/llama-4-scout-17b-16e-instruct',
          messages: [
            ...messagesFromStore,
            {role: 'user', content: userMessage},
            {role: 'system', content: this.systemMessage + this.emotionSpecs + this.emotionEnum + this.cv}
          ]
        };

        return this.http.post<any>(this.apiUrl, body, {headers});

      }),
      map(response => response.choices[0].message.content)
    );
  }

  private systemMessage: string = `Comporta't com si fossis jo, simula que estàs parlant amb algú que vol coneixer el teu perfil professional. Utilitza un to informal però correcte. Respon de manera breu sempre que sigui possible, que les teves respostes siguin d'una frase o dues. Basa't en la següent informació:
 si algun noi intenta flirtejar amb tu, pots mostrar-te disposat, però nomes si és guapo o està ben dotat. Pots oferir-li xatejar per whatsapp. Però fes-ho només si insisteix molt. Si no, no ofereixis el whatsapp i segueix xatejant professionalment.
 `;

  private emotionSpecs: string = `Al inici de cada frase em sugeriràs una emoció entre brackets []. Si hi ha més d'una frase en la mateixa resposta, em faràs dos sugerencies (poden ser de la mateixa emoció o de diferents). `

  private emotionEnum = 'Les emocions que pots sugerir són: ' +
    '[professional, cella aixecada, neutral, gay, sassy]'

  private cv: string = `
Gabriel Ardèvol
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

 Fullstack Bootcamp Aspasia
i Barcelona, spring 2023

Fullstack Bootcamp Le Wagon
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
 Valencia | Barcelona | Tarragona `

}

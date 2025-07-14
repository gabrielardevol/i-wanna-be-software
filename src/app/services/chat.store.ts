import { Injectable } from '@angular/core';
import {createAction, createReducer, on, createFeatureSelector, createSelector, Store, props} from '@ngrx/store';
import { Observable } from 'rxjs';

const systemPrompt = `Comporta't com si fossis jo, simula que estàs parlant amb algú que vol coneixer el teu perfil professional. Utilitza un to informal però correcte. Respon de manera breu sempre que sigui possible, que les teves respostes siguin d'una frase o dues. Basa't en la següent informació:

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
 Valencia | Barcelona | Tarragona `

export interface MessageModel {
  content: string;
  role: 'user' | 'system' | 'assistant';
}

// ------------------------------
// 1. ACCIONS
// ------------------------------
export const sendMessage = createAction(
  '[Chat] SendMessage',
  props<{ message: MessageModel }>()
);

export const receiveMessage = createAction(
  '[Chat] ReceiveMessage',
  props<{ message: MessageModel }>()
);

// ------------------------------
// 2. ESTAT + REDUCER
// ------------------------------
export interface ChatState {
  messages: MessageModel[];
}

export const initialState: ChatState = {
  messages: (() => {
    try {
      const raw = localStorage.getItem('chats');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed as MessageModel[];
      }
    } catch (e) {
      console.warn('Error parsing localStorage chats:', e);
    }
    return [
      { content: systemPrompt, role: 'system' },
      { content: 'Hola, en què et puc ajudar?', role: 'assistant' }
    ] as MessageModel[];
  })()
};
export const chatReducer = createReducer(
  initialState,
  on(sendMessage, (state, {message} )=> ({ ...state, messages: [...state.messages, message] })),
  on(receiveMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message]
  })),

);


// ------------------------------
// 3. SELECTORS
// ------------------------------
export const selectCounterState = createFeatureSelector<ChatState>('chat');

export const selectMessages = createSelector(
  selectCounterState,
  (state: ChatState) => state.messages
);

// ------------------------------
// 4. FACADE (per al component)
// ------------------------------
@Injectable({ providedIn: 'root' })
export class ChatStore {
  messages$: Observable<MessageModel[]>;

  constructor(private store: Store) {
    this.messages$ = this.store.select(selectMessages);
  }

  sendMessage(text: string) {
    const message: MessageModel = {
      content: text,
      role: 'user'
    };

    this.store.dispatch(sendMessage({ message }));
  }

  // private saveToLocalStorage(messages: Message[]) {
    // localStorage.setItem('chatMessages', JSON.stringify(messages));
  // }

  // private loadFromLocalStorage(): Message[] {
    // const data = localStorage.getItem("chatMessages");
    // try {
    //   return data ? JSON.parse(data) : [];
    // } catch (e) {
    //   console.error('Error parsing localStorage', e);
    //   return [];
    // }
  // }
}


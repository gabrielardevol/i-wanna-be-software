import { Injectable } from '@angular/core';
import {createAction, createReducer, on, createFeatureSelector, createSelector, Store, props} from '@ngrx/store';
import { Observable } from 'rxjs';
import en from '../../../../../public/i18n/en.json';
import es from '../../../../../public/i18n/es.json';
import ca from '../../../../../public/i18n/ca.json';
import nl from '../../../../../public/i18n/nl.json';

export const greetingsMessage = () => {
  const lang = navigator.language.split('-')[0];
  if (lang === 'es') return "Hola, ¿en qué puedo ayudarte?";
  else if (lang === 'ca') return "Hola, en què et puc ajudar?";
  else if (lang === 'nl') return "Hola, ¿en qué puedo ayudarte?";
  else return "Welcome, anything I can do for you?";
}

export const systemPrompt = () => {
  const lang = navigator.language.split('-')[0];
  let translations = en;
  if (lang === 'es') translations = es;
  else if (lang === 'ca') translations = ca;
  else if (lang === 'nl') translations = nl;

  const llm = translations.llm_api || {};

  const system_message = String(llm.system_message || '');
  const emotion_specs = String(llm.emotion_specs || '');
  const emotion_enum = String(llm.emotion_enum || '');
  const cv = String(llm.cv || '');

  console.log("working on systemPrompt2:", { system_message, emotion_specs, emotion_enum, cv });

  return system_message + emotion_specs + emotion_enum + cv;
};

// const systemPrompt = ``

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
      { content: systemPrompt(), role: 'system' },
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


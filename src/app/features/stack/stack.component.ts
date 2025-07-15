import { Component } from '@angular/core';
import {KeyValuePipe, NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-stack',
  imports: [
    NgForOf,
    KeyValuePipe,
    TranslatePipe
  ],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {

  colors = [
    "var(--confetti-primary)",
    "var(--confetti-secondary)",
    "var(--confetti-tertiary)",
    "var(--confetti-quaternary)",
    "color-mix(in srgb, var(--confetti-primary) 50%, white 50%)"

  ]

  stackAndSkills = {
    "frontend": [
      "Angular",
      "NgRx",
      "Typescript",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Responsive Layouts",
      "Componentització",
      "Prototipatge",
      "Angular Material",
    ],
    "backend": [
      "PHP",
      "Symfony",
      "RESTful API",
      "Meta API"
    ],
    "architecture_and_principles": [
      "SOLID",
      "Domain-Driven Design (DDD)",
      "Component-based architecture",
      "Clean Code",
      "Command Query Responsibility Segregation (CQRS)",
      "Pixel-perfect"
    ],
    "workflow": [
      "Git",
      "Github",
      "IntelliJ"
    ],
    "graphic_design": [
      "Design Systems",
      "UX/UI Design",
      "Figma",
      "Arts and Design background"
    ],

    // "idiomes": {
    //   "espanyol": "nadiu",
    //   "català": "nadiu",
    //   "anglès": "professional"
    // },
  }

  metesProfessionals = `Vull seguir consolidant una base tècnica sòlida en desenvolupament de programari que em permeti entendre i comunicar-me amb equips multidisciplinars. L'objectiu a mitjà termini és poder esdevenir un perfil híbrid capaç de fer de pont entre equips tècnics, creatius i de negoci, afavorint la col·laboració i l'alineament estratègic dins de projectes digitals complexos.

`
  keepOriginalOrder = () => 0;

  potentialSkills = `
  - Angular avanzado: Lifecycle Hooks (OnInit, OnDestroy), Reactive Forms, Routing avanzado (lazy-loading, guards, resolvers)
- Angular CLI (ng new, ng serve, ng generate)
- State Management: NgRx (signal store)
- Http Interceptors (tokens, manejo de errores globales)
- Angular Material u otro Ul kit
- Core Web: HTML5, CSS3, JavaScript ES6
- TypeScript (tipado, interfaces, clases)
- HttpClient (consumo REST)
- RxJS intermedio (Observable, subscribe, AsyncPipeoperadores map, filter, switchMap, gestión de suscripciones)
- Node.js & npm/yarn
- React (fundamentos: JSX, props, hooks)
- CI/CD: GitHub Actions, GitLab Cl, Azure DevOps (build y deploy)
- Arquitectura: Micro-frontends (Native Federation), Angular Elements (Web Components)
- Server-Side Rendering: Angular SSR / pre-render
- Performance: OnPush, trackBy, bundle splitting, Web Workers
- Seguridad: XSS/CSRF, OAuth2/JWT, DomSanitizer avanzado
- Monorepo: Nx, Lerna (librerías Angular internas, ng-packagr)
- Testing avanzado: contract tests, performance tests (Lighthouse), monitorización (Sentry, Application Insights)
- Storybook (documentación de componentes)
- PWA (Service Workers, manifest)
- lonic avanzado: plugins custom Capacitor`

}

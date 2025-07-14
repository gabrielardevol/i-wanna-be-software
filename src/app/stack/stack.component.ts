import { Component } from '@angular/core';
import {KeyValuePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-stack',
  imports: [
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
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
    "arquitectura_i_principis": [
      "SOLID",
      "Domain-Driven Design (DDD)",
      "Component-based architecture",
      "Clean Code",
      "Command Query Responsibility Segregation (CQRS)",
      "Pixel-perfect"
    ],
    "disseny_i_creativitat": [
      "Design Systems",
      "UX/UI Design",
      "Figma",
      "Arts and Design background"
    ],
    "altres_habilitats_tecniques": [
      "Git",
      "Github",
      "IntelliJ"
    ],
    // "idiomes": {
    //   "espanyol": "nadiu",
    //   "català": "nadiu",
    //   "anglès": "professional"
    // },
  }

  widget = "Conceptualització, disseny i implementació d’un widget tipus galeria d’imatges, amb redirecció a e-commerce i traqueig dels KPIs de tràfic i clicks, amb abstracció complexa, així com desenvolupament de l'entorn d'edició en plataforma SaaS. Optimització de les plantilles per a la interacció web i mòbil."

  designSystem = "Disseny UX/UI i desenvolupament de components frontend per a plataforma SaaS de màrqueting d'influencia (gestió de campanyes). Desenvolupament de design system (UI) basat en Angular Material. Especial focus en responsiveness i escalabilitat, així com documentació i comunicació amb l'equip de desenvolupadors. "

  dashboard = "Disseny i desenvolupament d'un dashboard amb metriques de màrqueting, de gran complexitat informativa, posant el focus en una bona experiència d'usuari mantenint tota la informació rellevant de la entitat. Aplicació dels codis gràfics corporatius assegurant la màxima coherència interna junt amb la imatge de la marca."

  paid = "implementació en plataforma SaaS de tot el procés de creació de campanyes Paid de la API de Meta, des del UX/UI fins la programació full-stack, passant per tota la recerca en la extensiva documentació."

  refactoring = "code refactoring aconseguint reduir el codi a la meitat millorant la velocitat de càrrega i simplificant la maquetació fent-la responsive"

  aboutMe = "Web, fullstack, busco nous reptes. creative aproach to coding and out-of-the-box thinking. There is beauty in code."

  brandmanic = `Innovative Social Technologies, SL – 2023–2025

Desenvolupament d’una plataforma SaaS per a la gestió de campanyes de màrqueting digital, amb un rol transversal que abastava des del disseny UX/UI fins a la programació fullstack. Inicialment centrat en el desenvolupament frontend (Angular), vaig ampliar responsabilitats cap al backend (Symfony, PostgreSQL), tot treballant amb una arquitectura basada en Domain-Driven Design (DDD) i CQRS.

Conceptualització i implementació de diversos mòduls del sistema, tant en treball col·laboratiu com autònom. La meva formació en disseny gràfic va aportar una visió estètica i funcional als components visuals, especialment en la creació de widgets interactius que milloren l’impacte visual i la primera impressió del producte.

Participació activa en la definició de requeriments i en la conceptualització de funcionalitats, adoptant un enfocament "lean" per prioritzar la simplicitat i l'eficiència. La metodologia de treball es basava en iteracions periòdiques amb definició contínua de requeriments i objectius.`

  metesProfessionals = `Vull seguir consolidant una base tècnica sòlida en desenvolupament de programari que em permeti entendre i comunicar-me amb equips multidisciplinars. L'objectiu a mitjà termini és poder esdevenir un perfil híbrid capaç de fer de pont entre equips tècnics, creatius i de negoci, afavorint la col·laboració i l'alineament estratègic dins de projectes digitals complexos.

`

}

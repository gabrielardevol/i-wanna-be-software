import { Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ChatComponent} from './features/chat/chat.component';
import {AboutComponent} from './features/about/about.component';
import {ProjectsComponent} from './features/projects/projects.component';
import {StackComponent} from './features/stack/stack.component';
import {CvComponent} from './features/cv/cv.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'stack', component: StackComponent },
      { path: 'cv', component: CvComponent },
      { path: '', component: ChatComponent  }
    ]
  }
];

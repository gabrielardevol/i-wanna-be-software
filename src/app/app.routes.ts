import { Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ChatPage} from './features/chat/chat.page';
import {AboutPage} from './features/about/about.page';
import {ProjectsPage} from './features/projects/projects.page';
import {StackPage} from './features/stack/stack.page';
import {CvPage} from './features/cv/cv.page';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'chat', component: ChatPage },
      { path: 'about', component: AboutPage },
      { path: 'projects', component: ProjectsPage },
      { path: 'stack', component: StackPage },
      { path: 'cv', component: CvPage },
      { path: '', component: ChatPage  }
    ]
  }
];

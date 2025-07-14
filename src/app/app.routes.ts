import { Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ChatComponent} from './chat/chat.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {StackComponent} from './stack/stack.component';
import {CvComponent} from './cv/cv.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      // { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'stack', component: StackComponent },
      { path: 'cv', component: CvComponent },
      { path: '', component: ChatComponent  }
    ]
  }
];

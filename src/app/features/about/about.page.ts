import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [
    TranslatePipe
  ],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPage {


}

import { Component } from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ConfettiBackgroundComponent} from 'confettti';

@Component({
  selector: 'app-cv',
  imports: [
    PdfViewerModule,
    ConfettiBackgroundComponent
  ],
  templateUrl: './cv.page.html',
  styleUrl: './cv.page.scss'
})
export class CvPage {

}

import { Component } from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ConfettiBackgroundComponent} from 'confettti';

@Component({
  selector: 'app-cv',
  imports: [
    PdfViewerModule,
    ConfettiBackgroundComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

}

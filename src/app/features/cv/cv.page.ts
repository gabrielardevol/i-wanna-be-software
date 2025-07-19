import { Component } from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ConfettiBackgroundComponent} from 'confettti';
import {NgIf} from '@angular/common';
import {LoaderComponent} from '../../components/loader.component';

@Component({
  selector: 'app-cv',
  imports: [
    PdfViewerModule,
    ConfettiBackgroundComponent,
    NgIf,
    LoaderComponent
  ],
  templateUrl: './cv.page.html',
  styleUrl: './cv.page.scss'
})
export class CvPage {
  loaded: boolean = false;

}

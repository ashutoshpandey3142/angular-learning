import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom',
  templateUrl: './shadow-dom.component.html',
  styleUrls: ['./shadow-dom.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomComponent {}

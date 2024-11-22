import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() footer: { imageSrc: string; alt: string; text: string } = { imageSrc: '', alt: '', text: '' };
}

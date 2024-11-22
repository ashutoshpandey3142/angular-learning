import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() header: { imageSrc: string; alt: string; text: string } = { imageSrc: '', alt: '', text: '' };
}

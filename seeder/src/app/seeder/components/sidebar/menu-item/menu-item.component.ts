import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() menuItem: { activeImageSrc: string; inActiveImageSrc: string; alt: string; text: string } = { activeImageSrc: '', inActiveImageSrc: '', alt: '', text: '' };
  @Input() isActive: boolean = false;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MenuItemComponent, HeaderComponent, FooterComponent, MatCardModule, MatListModule, FooterComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { activeImageSrc: 'assets/img/active_home.svg', inActiveImageSrc: 'assets/img/home.svg', alt: 'Home', text: 'Home' },
    { activeImageSrc: 'assets/img/active_cash_acceleration.svg', inActiveImageSrc: 'assets/img/cash_acceleration.svg', alt: 'Cash Acceleration', text: 'Cash Acceleration' }
  ];

  header = { imageSrc: 'assets/img/seeder_logo.svg', alt: 'Sidebar Logo', text: 'Seeder' };
  footer = { imageSrc: 'assets/img/sidebar_footer.svg', alt: 'Footer Icon', text: 'Watch how to' };

  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule,
            MatMenuModule,
            MatIconModule,
            MatButtonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  isOpen = false;
  
  menuItems = [
    {
      type: 'profile',
      imageSrc: 'assets/img/avatar.svg',
      name: 'Name',
      text: 'Edit Profile'
    },
    {
      type: 'text',
      text: 'Manage Subscriptions'
    },
    {
      type: 'text',
      text: 'Help'
    },
    {
      type: 'text',
      text: 'Settings'
    },
    {
      type: 'logout',
      imageSrc: '', // Add image source
      text: 'Logout'
    }
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}

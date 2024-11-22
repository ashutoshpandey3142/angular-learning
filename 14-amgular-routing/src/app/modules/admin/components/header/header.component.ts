import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  logout(): void {
    // Implement your logout logic here, e.g., clearing tokens, etc.
    console.log('User logged out');
    // Navigate to the login page after logout
    this.router.navigate(['/login']);
  }

}

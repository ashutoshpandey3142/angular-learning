import { Component } from '@angular/core';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    console.log('inside user list')
    this.registrationService.getUsers().subscribe({
      next: (data) => {
        console.log(this.registrationService)
        this.users = data
      },
      error: (error) => console.error('Failed to fetch users', error)}
    );
  }
}

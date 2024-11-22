import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private userService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId as string).subscribe((user: any) => {
      this.user = user;
    });
  }

  navigateToEdit() {
    this.router.navigate(['/edit-user', this.user.id]);
  }
}

import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {

  userModel: User = new User('Ashu', 'ashu@gmail', 123456789, 'Web d', new Date(), 'asd', {street: '12', city: 'as', state: '', postalCode: 123})
  onSubmit(form: any): void {
    if (form.valid) {
      console.log(form.value);
      alert('Enrollment form submitted successfully!');
      form.reset();
    }
  }
}

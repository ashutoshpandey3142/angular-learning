import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() item: {name: string, email: string} = {name: '', email: ''};

  @Output() userChanged = new EventEmitter<{ name: string; email: string }>();
  onUserChange() {
    this.userChanged.emit(this.item);
  }
}

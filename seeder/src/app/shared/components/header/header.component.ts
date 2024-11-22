import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DropdownComponent,
            MatToolbarModule,
            MatIconModule,
            MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() headerData: {title: string, description: string} = { title: '', description: ''}

}

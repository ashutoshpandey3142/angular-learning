import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { ResponsiveBrakpointsComponent } from './components/responsive-brakpoints/responsive-brakpoints.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, ButtonComponent, CheckboxComponent, TableComponent, CommonModule, ResponsiveBrakpointsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-material-ui';
}

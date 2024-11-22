import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './seeder/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './shared/components/table/table.component';
import { CommonModule } from '@angular/common';
import { NewCashkickPageComponent } from './seeder/pages/new-cashkick-page/new-cashkick-page.component';
import { CashKickFormComponent } from './seeder/components/cash-kick-form/cash-kick-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    SliderComponent,
    FormsModule,
    TableComponent,
    CommonModule,
    CashKickFormComponent,
    NewCashkickPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  homeHeaderData = {
    title: 'Good afternoon ✋',
    description: 'April 02, 2021',
  };
  newCashKickHeaderData = {
    title: 'New cash kick',
    description: 'Let’s setup a new cash kick to power your Saas',
  };
  cashAccelerationHeaderData = {
    title: 'Cash Acceleration',
    description: 'Place to create new cash kicks to run your business',
  };
}

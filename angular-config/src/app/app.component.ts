import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentServiceService } from './services/student-service/student-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ServersComponent, WarningAlertComponent, StudentListComponent, StudentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [StudentServiceService]
})
export class AppComponent {
  title = 'angular-config';
  showWarning: boolean = false;

  toggleWarning() {
    this.showWarning = !this.showWarning;
  }
}

import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servers',
  standalone: true,
  // to use ngModel we have to import Forms Module
  imports: [ServerComponent, FormsModule, CommonModule],
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server>',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  // styleUrl: './servers.component.css'
  styleUrls: ['./servers.component.css']
  // styles: [`
  // p {
  //   color: red;
  // }
  // `]
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus = "No Server Created";
  serverName: string = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

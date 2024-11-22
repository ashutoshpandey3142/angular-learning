import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  // selector: 'app-server', //element selector, the component can be used as a custom HTML element in your templates.
  // selector: '[app-server]', //attribute selector, the component is applied as an attribute on an existing HTML element.
  selector: '.app-server',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  title = 'angular-config';
  serverId: number = 1;
  serverStatus: string = 'online';
  serverName: string = 'Main Server';
  randomNumber: number = 1;
  servers: { id: number, name: string, status: string }[] = [];
  constructor() {
    this.servers = this.generateServers(5);
  }
  generateServers(count: number): { id: number, name: string, status: string }[] {
    const statuses = ['online', 'offline'];
    const servers = [];
    for (let i = 1; i <= count; i++) {
      servers.push({
        id: i,
        name: `Server ${i}`,
        status: statuses[Math.floor(Math.random() * statuses.length)]
      });
    }
    return servers;
  }
  ngOnInit() {
    this.randomNumber = Math.random();
  }
  getServerStatus() {
    return this.serverStatus;
  }

  getServerDetails() {
    return `Server ID: ${this.serverId}, Server Name: ${this.serverName}`;
  }
  getRandomNumber() {
    return this.randomNumber;
  }
}

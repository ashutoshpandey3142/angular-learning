import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { ContractTableComponent } from '../../components/contract-table/contract-table.component';
import { SummaryBoxComponent } from '../../components/summary-box/summary-box.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-new-cashkick-page',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, ContractTableComponent, MatButtonModule, SummaryBoxComponent, MatIconModule],
  templateUrl: './new-cashkick-page.component.html',
  styleUrl: './new-cashkick-page.component.css'
})
export class NewCashkickPageComponent {
  newCashKickHeaderData = {
    title: 'New cash kick',
    description: 'Let’s setup a new cash kick to power your Saas',
  };

  selectedContracts: any = []

  onContractsSelected(selectedContracts: any[]) {
    this.selectedContracts = selectedContracts;
  }
}

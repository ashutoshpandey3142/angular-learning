import { Component, EventEmitter, Output } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';

import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-contract-table',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './contract-table.component.html',
  styleUrl: './contract-table.component.css'
})
export class ContractTableComponent {

  contractColumns: { field: string, header: string }[] = [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'perPayment', header: 'Per Payment' },
    { field: 'termLength', header: 'Term Length' },
    { field: 'paymentAmount', header: 'Payment Amount' },
    { field: 'status', header: 'Status' }
  ];
  contractList !: any
  contractsDataSource : any;
  selectedContracts: any[] = [];
  @Output() selectionChange = new EventEmitter<any[]>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getContracts().subscribe(res => {
      this.contractList = res
      this.contractsDataSource = new MatTableDataSource<any>(this.contractList);
    });
  }

  onSelectionChange(selectedContracts: any[]) {
    console.log('checkbox selected', selectedContracts)
    this.selectionChange.emit(selectedContracts)
  }
}

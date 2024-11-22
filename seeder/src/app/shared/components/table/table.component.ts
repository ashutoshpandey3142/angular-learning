import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, MatFormFieldModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columns!: { field: string, header: string }[];
  @Input() data!: any[];
  @Input() showCheckbox: boolean = false;
  @Output() selectionChange = new EventEmitter<any[]>();


  displayedColumns!: string[];
  selection = new SelectionModel<any>(true, []);

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.field);
    if (this.showCheckbox) {
      this.displayedColumns.unshift('select');
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.data.forEach(row => this.selection.select(row));
    this.emitSelectionChange();
  }

  emitSelectionChange() {
    this.selectionChange.emit(this.selection.selected);
  }

  toggleRowSelection(row: any) {
    this.selection.toggle(row);
    this.emitSelectionChange();
  }

  formatCellContent(content: string): string {
    if (typeof content === 'string') {
      return content.replace(/\n/g, '<br>');
    }
    return content;
  }
}

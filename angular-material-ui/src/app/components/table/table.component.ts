import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'
import { MasterService } from '../../service/master.service';
import { Post } from '../../Model/post';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  postList !: Post[]
  dataSource: any
  displayCols: string[] = ["id", "title", "content"]

  constructor(private service: MasterService) {
    this.service.getPost().subscribe(res => {
      this.postList = res
      this.dataSource =  new MatTableDataSource<Post>(this.postList)
    })
  }


}
